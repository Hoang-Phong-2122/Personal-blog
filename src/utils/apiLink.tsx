export const ENDPOINT = 'http://elmis.itdemo.vn:8088/api';

export const apiLink = {
    AUTHENTICATE: `${ENDPOINT}/auth/login`,
    APP_MENU: `${ENDPOINT}/menu/getMenuUser`,

    MAP_GET_INFO: `${ENDPOINT}/map/getInfo`,
    MAP_GET_DATA: `${ENDPOINT}/map/getData`,
    MAP_GET_VALUE_PARAM: `${ENDPOINT}/map/getValueParam?id=`,

    CHART_GET_INFO: `${ENDPOINT}/chart/getInfo`,
    CHART_GET_DATA: `${ENDPOINT}/chart/getData`,
    CHART_GET_VALUE_PARAM: `${ENDPOINT}/chart/getValueParam?id=`,

    DASHBOARD_LIST_MENU: `${ENDPOINT}/dashboard/listMenuConfig`,
    DASHBOARD_BY_USER: `${ENDPOINT}/dashboard/getUserDashboard`,
    DASHBOARD_UPDATE: `${ENDPOINT}/dashboard/updateDashboard`,

    DM_CO_SO_KCB: `${ENDPOINT}/danhmuc/get/thautw_dm_cskcb/ma`,
    DM_TINH: `${ENDPOINT}/danhmuc/get/dm_tinh/ma_tinh`,

    DS_BN_ARC_TCS: `${ENDPOINT}/benhnhan/arv/get`,
    CHI_PHI_1_LAN_DIEU_CHI: `${ENDPOINT}/benhnhan/arv/getChiPhi`,
    LICH_SU_DIEU_CHI: `${ENDPOINT}/benhnhan/arv/getDieuTri`,

}
