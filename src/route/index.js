/** 
 * @Coder: 『 安忠琪 』
 * @Date: 2022-04-25 17:54:27
 * @LastEditTime: 2022-05-07 17:54:45
 * @Description: 路由文件
 */
import { createRouter, createWebHashHistory } from "vue-router";
const home = () => import("views/home-page/index.vue");
const layout = () => import('layouts/main.vue')
const routes = [
    { path: "/", component: layout, redirect: "/sbh" },
    {
        path: "/sbh",
        name: "layout",
        component: layout,
        redirect: "/home-page",
        children: [
            { name: 'homePage', path: "/home-page", component: home }, // 首页
            // 选学课
            { name: 'selectedSubjects', path: "/chose-subjects", component: () => import("views/chose-subjects/index.vue") },
            // 走班排课
            { name: 'schedulingClasses', path: "/scheduling-classes", component: () => import("views/scheduling-classes/index.vue") },
            // 教学视频
            { name: 'teachingVideo', path: "/teaching-video", component: () => import("views/teaching-video/index.vue") },
            // 教学课件
            { name: 'teachingCourseware', path: "/teaching-courseware", component: () => import("views/teaching-courseware/index.vue") },
            // 名师展示
            { name: 'famousTeacherDisplay', path: "/famous-teacher-display", component: () => import("views/famous-teacher-display/index.vue") },
            // 电子书籍
            { name: 'electronicBook', path: "/electronic-book", component: () => import("views/electronic-book/index.vue") },
            // 优秀学生
            { name: 'excellentStudent', path: "/excellent-student", component: () => import("views/excellent-students/index.vue") },
            // 在线提问
            { name: 'onlineQuestions', path: "/online-questions", component: () => import("views/online-question/index.vue") },
            // 习题展示
            { name: 'exerciseDisplay', path: "/exercise-display", component: () => import("views/exercise-display/index.vue") },
            {
                path: '/profile', component: () => import('views/profile/index.vue'),
                redirect: "/home_page",
                children: [
                    {
                        path: '/home_page',
                        redirect: "/my_collection",
                        component: () => import('views/profile/profile-home-page/index.vue'),
                        children: [
                            { path: '/my_collection', component: () => import('views/profile/profile-home-page/collection.vue'), meta: { tabName: '我的收藏', } }, // 我的收藏
                            { path: '/my_fans', component: () => import('views/profile/profile-home-page/fans.vue'), meta: { tabName: '我的粉丝', } }, // 我的粉丝
                            { path: '/my_follow', component: () => import('views/profile/profile-home-page/follow.vue'), meta: { tabName: '我的关注', } }, // 我的关注
                            { path: '/my_footprint', component: () => import('views/profile/profile-home-page/footprint.vue'), meta: { tabName: '我的足迹', } }, // 我的足迹
                        ]
                    },
                    {
                        path: '/my_message',
                        redirect: "/msg_system",
                        component: () => import('views/profile/profile-my-imessage/index.vue'),
                        meta: { tabName: '我的消息', },
                        children: [
                            { path: '/msg_system', component: () => import('views/profile/profile-my-imessage/systemMsg.vue'), meta: { tabName: '系统消息', msg: true } }, // 系统消息
                            { path: '/msg_follow', component: () => import('views/profile/profile-my-imessage/followMsg.vue'), meta: { tabName: '关注消息', msg: true } }, // 关注消息

                        ]
                    },
                    {
                        path: '/class_student',
                        redirect: "/my_class",
                        component: () => import('views/profile/profile-class-student/index.vue'),
                        meta: { tabName: '班级学生', },
                        children: [
                            /* tabUnShow  标记此菜单不显示的个人中心的顶部 */
                            /* hideTopTab 表示，此界面中需要隐藏头部的菜单栏*/
                            { path: '/my_class', component: () =>/*  */ import('views/profile/profile-class-student/my-class.vue'), meta: { tabName: '我的班级' } }, // 我的班级
                            { path: '/my_student', component: () => import('views/profile/profile-class-student/my-students.vue'), meta: { tabName: '我的学生' } }, // 我的学生
                            { path: '/my_student_detail', component: () => import('views/profile/profile-class-student/my-students-detail.vue'), meta: { tabName: '学生详情', tabUnShow: true, hideTopTab: true } }, // 我的学生
                        ]
                    }
                ],
            },
        ]
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,

    // TODO:居然有延迟，先搁置这个功能，研究透了再搞

    /* 切换路由时，新界面的滚动条应该咋最顶部 */
    // scrollBehavior(to, from, savedPosition) {
    //     // 始终滚动到顶部
    //     return { top: 0 }
    // },
})
export default router