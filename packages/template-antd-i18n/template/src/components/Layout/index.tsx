import React, { useState, useEffect, useMemo } from 'react';
import ProBasicLayout, {
  SettingDrawer,
  getMenuData,
  MenuDataItem,
} from '@ant-design/pro-layout';
import { Link } from 'react-router-dom';
import { useLocation } from '@/hooks';
import { isDevelopEnv } from '@/utils';
import { menus } from '@/configs';
import './index.css';

const BasicLayout: React.FC = props => {
  const location = useLocation();
  const [settings, setSetting] = useState({});
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

  return (
    <>
      <ProBasicLayout
        title="React Seed"
        logo="logo192.png"
        menuDataRender={() => menuData}
        menuItemRender={(menuItemProps, defaultDom) => {
          if (menuItemProps.isUrl || !menuItemProps.path) {
            return defaultDom;
          }
          return <Link to={menuItemProps.path}>{defaultDom}</Link>;
        }}
        menuProps={{
          selectedKeys,
          openKeys,
          onOpenChange: setOpenKeys,
        }}
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
