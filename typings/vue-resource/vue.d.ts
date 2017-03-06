/**
 * Augment the typings of Vue.js
 */
import * as Vue from 'vue'
import * as VueResource from './index'
import { $http, $resource, Http, Resource, HttpOptions, HttpHeaders } from './index'

declare module "vue/types/vue" {
    // 利用interface添加额外成员
    interface Vue {
        $http: Http;
        $resource: Resource;
    }
    // 使用namespace添加新类型，值和命名空间，只要不出现冲突。
    namespace Vue {
        export const http: Http;
        export const resource: Resource;
    }
}

declare module "vue/types/options" {
    interface ComponentOptions<V extends Vue> {
        http?: (HttpOptions & { headers?: HttpHeaders } & { [key: string]: any })
    }
}
