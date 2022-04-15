import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useContext,
} from 'react';
import { Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd/es/menu';
import { Link } from 'react-router-dom';
import ProBasicLayout, {
  getMenuData,
  MenuDataItem,
  SettingDrawer,
  SettingDrawerProps,
} from '@ant-design/pro-layout';
import { config, menuIcon, menus, language, languages } from '@/configs';
import defaultSettings from '@/defaultSettings';
import { useLocation } from '@/hooks';
import { isDevelopEnv } from '@/utils';
import { ConfigContext } from '@/utils/context';
import styles from './index.module.less';

const renderMenuItem = (menus: MenuDataItem[]): MenuDataItem[] =>
  menus.map(({ icon, children, ...item }) => ({
    ...item,
    icon: icon && menuIcon[icon as string],
    children: children && renderMenuItem(children),
  }));

const BasicLayout: React.FC<any> = props => {
  const location = useLocation();
  const [settings, setSetting] = useState(
    defaultSettings as SettingDrawerProps['settings']
  );
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['/']);
  const isDev = isDevelopEnv();
  const { pathname } = location;
  const { breadcrumbMap, menuData } = useMemo(() => getMenuData(menus), []);
  const { language: locale, setLanguage } = useContext(ConfigContext);
  const currentLanguage = language[locale];

  useEffect(() => {
    const select = breadcrumbMap.get(pathname);
    if (select) {
      setOpenKeys((select as MenuDataItem)['pro_layout_parentKeys']);
      setSelectedKeys([(select as MenuDataItem)['key'] as string]);
    }
  }, [breadcrumbMap, pathname]);

  const menuDataRender = useCallback(
    () => renderMenuItem(menuData),
    [menuData]
  );

  const menuItemRender = useCallback((menuItemProps, defaultDom) => {
    if (menuItemProps.isUrl || !menuItemProps.path) {
      return defaultDom;
    }
    return <Link to={menuItemProps.path}>{defaultDom}</Link>;
  }, []);

  const handleOnOpenChange = useCallback(
    keys => setOpenKeys(keys as string[]),
    []
  );

  const menuProps = useMemo<MenuProps>(() => {
    return {
      selectedKeys,
      openKeys,
      onOpenChange: handleOnOpenChange,
    };
  }, [handleOnOpenChange, openKeys, selectedKeys]);

  const rightContentRender = () => (
    /* @ts-ignore */
    <Dropdown
      overlay={
        <Menu>
          {languages.map(item => (
            <Menu.Item key={item.key} onClick={() => setLanguage(item.key)}>
              <span className={styles.headerFlag}>{item.flag}</span>
              {item.value}
            </Menu.Item>
          ))}
        </Menu>
      }
    >
      <div className={styles.headerButton}>
        <span className={styles.headerFlag}>{currentLanguage.flag}</span>
        {currentLanguage.value}
      </div>
    </Dropdown>
  );

  return (
    <>
      <ProBasicLayout
        {...settings}
        title={config.title}
        logo={config.logo}
        menuDataRender={menuDataRender}
        menuItemRender={menuItemRender}
        menuProps={menuProps}
        rightContentRender={rightContentRender}
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
