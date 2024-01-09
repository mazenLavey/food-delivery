export const  ALERT_TYPE = {
    ERROR: "error",
    SUCCESS : "success"
}

export const  ALERT_MESSAGE = {
    [ALERT_TYPE.ERROR]: "Something wrong with the server, Refresh the page or Contact us",
    [ALERT_TYPE.SUCCESS] : "New item is added to cart",
}

export const  ALERT_ICON = {
    [ALERT_TYPE.ERROR]: {
        name: 'material-symbols:error',
        color: 'red',
    },
    [ALERT_TYPE.SUCCESS] : {
        name: 'lets-icons:check-fill',
        color: '#FFE145',
    },
}