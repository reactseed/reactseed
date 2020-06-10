import React, { useState, useEffect, useMemo, useCallback } from 'react';
import ProBasicLayout, {
  SettingDrawer,
  getMenuData,
  MenuDataItem,
  SettingDrawerProps,
} from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { useLocation } from '@/hooks';
import { isDevelopEnv } from '@/utils';
import { menus, menuIcon } from '@/configs';
import defaultSettings from '@/defaultSettings';
import './index.css';

const renderMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && menuIcon[icon as string],
    children: children && renderMenuItem(children),
  }));

const BasicLayout: React.FC = props => {
  const location = useLocation();
  const [settings, setSetting] = useState(
    defaultSettings as SettingDrawerProps['settings']
  );
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/']);
  const isDev = isDevelopEnv();
  const { pathname } = location;
  const { breadcrumbMap, menuData } = useMemo(() => getMenuData(menus), []);

  useEffect(() => {
    const select = breadcrumbMap.get(pathname);
    if (select) {
      setOpenKeys((select as MenuDataItem)['pro_layout_parentKeys']);
      setSelectedKeys([(select as MenuDataItem)['key'] as string]);
    }
  }, [breadcrumbMap, pathname]);

  const menuDataRender = useCallback(() => renderMenuItem(menuData), [
    menuData,
  ]);

  const menuItemRender = useCallback((menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || !menuItemProps.path) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }, []);

  const menuProps = useMemo(
    () => ({
      selectedKeys,
      openKeys,
      onOpenChange: setOpenKeys,
    }),
    [openKeys, selectedKeys]
  );

  return (
    <>
      <ProBasicLayout
        title="React Seed"
        logo="logo192.png"
        menuDataRender={menuDataRender}
        menuItemRender={menuItemRender}
        menuProps={menuProps}
        {...settings}
      >
        {props.children}
      </ProBasicLayout>

      {isDev && (
        <SettingDrawer
          getContainer={() => document.getElementById('root')}
          settings={settings}
          onSettingChange={setSetting}
        />
      )}
    </>
  );
};

export default BasicLayout;
