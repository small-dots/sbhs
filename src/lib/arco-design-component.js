/** 
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-26 17:34:46
 * @LastEditTime: 2022-05-07 09:50:48
 * @Description: 按需引入arco-design的部分组件
 */
const componentStyle = ['button', 'space', 'input', 'form', 'menu', 'backTop', 'modal', 'layout']
import {
    Button, Space, Input, Form, FormItem, Menu, MenuItem, SubMenu, Modal, Layout,
    LayoutHeader, LayoutContent, Rate, LayoutFooter, InputSearch, AutoComplete, Select, Option, Notification,
    Carousel, CarouselItem, Radio, RadioGroup, Grid, Tabs, TabPane,Switch,DatePicker, Col, Row, Badge, GridItem, Table, Pagination, Upload, Collapse, Checkbox, CheckboxGroup, Steps, Step
} from '@arco-design/web-vue';
import '@arco-design/web-vue/es/button/style/css.js'
import '@arco-design/web-vue/es/space/style/css.js'
import '@arco-design/web-vue/es/input/style/css.js'
import '@arco-design/web-vue/es/form/style/css.js'
import '@arco-design/web-vue/es/menu/style/css.js'
import '@arco-design/web-vue/es/modal/style/css.js'
import '@arco-design/web-vue/es/carousel/style/css.js'
import '@arco-design/web-vue/es/radio/style/css.js'
import '@arco-design/web-vue/es/grid/style/css.js'
import '@arco-design/web-vue/es/table/style/css.js'
import '@arco-design/web-vue/es/pagination/style/css.js'
import '@arco-design/web-vue/es/upload/style/css.js'
import '@arco-design/web-vue/es/auto-complete/style/css.js'
import '@arco-design/web-vue/es/collapse/style/css.js'
import '@arco-design/web-vue/es/checkbox/style/css.js'
import '@arco-design/web-vue/es/steps/style/css.js'
import '@arco-design/web-vue/es/select/style/css.js'
import '@arco-design/web-vue/es/notification/style/css.js'
import '@arco-design/web-vue/es/rate/style/css.js'
import '@arco-design/web-vue/es/badge/style/css.js'
import '@arco-design/web-vue/es/tabs/style/css.js'
import '@arco-design/web-vue/es/switch/style/css.js'
import '@arco-design/web-vue/es/date-picker/style/css.js'
/* 加载arco组件 */
const loadComponents = (app) => {
    app.component('a-button', Button)
    app.component('a-space', Space)
    app.component('a-input', Input)
    app.component('a-form', Form)
    app.component('a-form-item', FormItem)
    app.component('a-menu', Menu)
    app.component('a-menu-item', MenuItem)
    app.component('a-sub-menu', SubMenu)
    app.component('a-modal', Modal)
    app.component('a-layout', Layout)
    app.component('a-layout-header', LayoutHeader)
    app.component('a-layout-content', LayoutContent)
    app.component('a-layout-footer', LayoutFooter)
    app.component('a-input-search', InputSearch)
    app.component('a-carousel', Carousel)
    app.component('a-carousel-item', CarouselItem)
    app.component('a-radio', Radio)
    app.component('a-radio-group', RadioGroup)
    app.component('a-grid', Grid)
    app.component('a-col', Col)
    app.component('a-row', Row)
    app.component('a-grid-item', GridItem)
    app.component('a-table', Table)
    app.component('a-pagination', Pagination)
    app.component('a-upload', Upload)
    app.component('a-auto-complete', AutoComplete)
    app.component('a-collapse', Collapse)
    app.component('a-checkbox', Checkbox)
    app.component('a-steps', Steps)
    app.component('a-step', Step)
    app.component('a-select', Select)
    app.component('a-option', Option)
    app.component('a-notification', Notification)
    app.component('a-checkbox-group', CheckboxGroup)
    app.component('a-rate', Rate)
    app.component('a-badge', Badge)
    app.component('a-tabs', Tabs)
    app.component('a-tab-pane', TabPane)
    app.component('a-switch', Switch)
    app.component('a-date-picker', DatePicker)
    Notification._context = app._context;
    Modal._context = app._context;
    app.config.globalProperties.$modal = Modal
}

export default loadComponents