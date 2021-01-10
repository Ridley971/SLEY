import {check, request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {Platform} from 'react-native'

const PLATFORM_MICROPHONE_PERMISSIONS={
    ios: PERMISSIONS.IOS.MICROPHONE,
    android: PERMISSIONS.ANDROID.RECORD_AUDIO,
}

const PLATFORM_PHOTO_PERMISSIONS={
    ios: PERMISSIONS.IOS.PHOTO_LIBRARY,
    android: PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
}

const PLATFORM_CAMERA_PERMISSIONS={
    ios: PERMISSIONS.IOS.CAMERA,
    android: PERMISSIONS.ANDROID.CAMERA,
}

const REQUEST_PERMISSION_TYPE={
    microphone: PLATFORM_MICROPHONE_PERMISSIONS,  
    camera: PLATFORM_CAMERA_PERMISSIONS,
    photo: PLATFORM_PHOTO_PERMISSIONS
}

const PERMISSIONS_TYPE = {
    microphone:'microphone',
    photo:'photo',
    camera: 'camera'
}

class AppPermissions {
    
    checkPermission =async (type): Promise<boolean> => {
        console.log("AppPermissions check permission type :", type)
        const permissions = REQUEST_PERMISSION_TYPE[type][Platform.OS]
        console.log("AppPermissions check permission permissions :", permissions)

        if(!permissions){
            return true
        }

        try {
            const result = await check(permissions)
            console.log("AppPermissions check permission result :", result)

            if(result === RESULTS.GRANTED)   return true
            
            return this.requestPermission(permissions)// request permission

        } catch (error) {
            console.log("AppPermissions check Permission error :", error)
            return false
        }
    }

    requestPermission = async (permissions): Promise <boolean> => {
        console.log("AppPermissions requestPermission permission :", permissions)
        try {
            const result = await request(permissions)

            console.log("AppPermissions requestPermission result :", result)
            return result === RESULTS.GRANTED
        } catch (error) {
            console.log("AppPermissions requestPermission error :", error)
            return false
        }
    }
}

const Permissions = new AppPermissions()
export {Permissions, PERMISSIONS_TYPE}