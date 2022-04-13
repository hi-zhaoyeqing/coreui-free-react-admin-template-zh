import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard 仪表盘',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Theme 主题',
  },
  {
    component: CNavItem,
    name: 'Colors 颜色',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Typography 排版',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Components 组件',
  },
  {
    component: CNavGroup,
    name: 'Base 基础',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Accordion 手风琴',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Breadcrumb 面包屑',
        to: '/base/breadcrumbs',
      },
      {
        component: CNavItem,
        name: 'Cards 卡片',
        to: '/base/cards',
      },
      {
        component: CNavItem,
        name: 'Carousel 轮播',
        to: '/base/carousels',
      },
      {
        component: CNavItem,
        name: 'Collapse 折叠面板',
        to: '/base/collapses',
      },
      {
        component: CNavItem,
        name: 'List group 列表',
        to: '/base/list-groups',
      },
      {
        component: CNavItem,
        name: 'Navs & Tabs 导航和标签',
        to: '/base/navs',
      },
      {
        component: CNavItem,
        name: 'Pagination 分页',
        to: '/base/paginations',
      },
      {
        component: CNavItem,
        name: 'Placeholders 占位符',
        to: '/base/placeholders',
      },
      {
        component: CNavItem,
        name: 'Popovers 气泡卡片',
        to: '/base/popovers',
      },
      {
        component: CNavItem,
        name: 'Progress 进度条',
        to: '/base/progress',
      },
      {
        component: CNavItem,
        name: 'Spinners 加载中',
        to: '/base/spinners',
      },
      {
        component: CNavItem,
        name: 'Tables 表格',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Tooltips 提示',
        to: '/base/tooltips',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Buttons 按钮组件',
    to: '/buttons',
    icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Buttons 按钮',
        to: '/buttons/buttons',
      },
      {
        component: CNavItem,
        name: 'Buttons groups 按钮组',
        to: '/buttons/button-groups',
      },
      {
        component: CNavItem,
        name: 'Dropdowns 下拉菜单',
        to: '/buttons/dropdowns',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms 表单',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control 表单控件',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select 下拉选择',
        to: '/forms/select',
      },
      {
        component: CNavItem,
        name: 'Checks & Radios 单选多选框',
        to: '/forms/checks-radios',
      },
      {
        component: CNavItem,
        name: 'Range 范围',
        to: '/forms/range',
      },
      {
        component: CNavItem,
        name: 'Input Group 输入组',
        to: '/forms/input-group',
      },
      {
        component: CNavItem,
        name: 'Floating Labels 浮动标签',
        to: '/forms/floating-labels',
      },
      {
        component: CNavItem,
        name: 'Layout 布局',
        to: '/forms/layout',
      },
      {
        component: CNavItem,
        name: 'Validation 验证',
        to: '/forms/validation',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Charts 图表',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Icons 图标',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI 免费',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI 标志',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI 品牌',
        to: '/icons/brands',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Notifications 通知',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Alerts 警告',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Badges 徽标',
        to: '/notifications/badges',
      },
      {
        component: CNavItem,
        name: 'Modal 模态框',
        to: '/notifications/modals',
      },
      {
        component: CNavItem,
        name: 'Toasts 消息提示',
        to: '/notifications/toasts',
      },
    ],
  },
  {
    component: CNavItem,
    name: 'Widgets 小部件',
    to: '/widgets',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Extras 附加功能',
  },
  {
    component: CNavGroup,
    name: 'Pages 页面',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login 登陆',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register 注册',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
