/// <reference types="css-font-loading-module" />

import { ComponentInternalInstance } from 'vue';
import { ComponentOptionsBase } from 'vue';
import { ComponentPublicInstance } from 'vue';
import { RendererNode } from 'vue';

export declare const ACTION_TYPE_ADD_EVENT = 8;

export declare const ACTION_TYPE_ADD_WXS_EVENT = 12;

export declare const ACTION_TYPE_CREATE = 3;

export declare const ACTION_TYPE_EVENT = 20;

export declare const ACTION_TYPE_INSERT = 4;

export declare const ACTION_TYPE_PAGE_CREATE = 1;

export declare const ACTION_TYPE_PAGE_CREATED = 2;

export declare const ACTION_TYPE_PAGE_SCROLL = 15;

export declare const ACTION_TYPE_REMOVE = 5;

export declare const ACTION_TYPE_REMOVE_ATTRIBUTE = 7;

export declare const ACTION_TYPE_REMOVE_EVENT = 9;

export declare const ACTION_TYPE_SET_ATTRIBUTE = 6;

export declare const ACTION_TYPE_SET_TEXT = 10;

/**
 * nodeId
 * event
 * flag
 */
export declare type AddEventAction = [
typeof ACTION_TYPE_ADD_EVENT,
number,
string | number,
number
];

export declare function addFont(family: string, source: string, desc?: FontFaceDescriptors): Promise<void>;

/**
 * nodeId
 * event
 * wxsEvent
 * flag
 */
export declare type AddWxsEventAction = [
typeof ACTION_TYPE_ADD_WXS_EVENT,
number,
string | number,
string | number,
number
];

export declare const ATTR_CHANGE_PREFIX = "change:";

export declare const ATTR_CLASS = "class";

export declare const ATTR_INNER_HTML = "innerHTML";

export declare const ATTR_STYLE = "style";

export declare const ATTR_TEXT_CONTENT = "textContent";

export declare const ATTR_V_OWNER_ID = ".vOwnerId";

export declare const ATTR_V_RENDERJS = ".vRenderjs";

export declare const ATTR_V_SHOW = ".vShow";

export declare const BACKGROUND_COLOR = "#f7f7f7";

export declare const BUILT_IN_TAGS: string[];

export declare function cache<T>(fn: (str: string) => T): (str: string) => T;

export declare function cacheStringFunction(fn: (string: string) => string): (str: string) => string;

export declare function callOptions(options: Options, errMsg: string): void;

export declare function callOptions(options: Options, data: {
    [key: string]: any;
    errMsg: string;
}): void;

export declare const COMPONENT_NAME_PREFIX = "VUni";

export declare const COMPONENT_PREFIX: string;

export declare const COMPONENT_SELECTOR_PREFIX = "uni-";

/**
 * nodeId
 * tag
 * parentNodeId
 * refNodeId
 * nodeJson
 */
export declare type CreateAction = [
typeof ACTION_TYPE_CREATE,
number,
string | number,
number,
number,
Partial<UniNodeJSON | UniNodeJSONMinify>?
];

export declare function createRpx2Unit(unit: string, unitRatio: number, unitPrecision: number): (val: string) => string;

export declare function createUniEvent(evt: Record<string, any>): UniEvent;

export declare const DATA_RE: RegExp;

export declare function debounce(fn: Function, delay: number): {
    (this: any): void;
    cancel(): void;
};

/**
 * Decode text using `decodeURIComponent`. Returns the original text if it
 * fails.
 *
 * @param text - string to decode
 * @returns decoded string
 */
export declare function decode(text: string | number): string;

export declare function decodedQuery(query?: Record<string, any>): Record<string, string>;

export declare const defaultRpx2Unit: {
    unit: string;
    unitRatio: number;
    unitPrecision: number;
};

declare type DictArray = [number, number][];

export declare class EventChannel {
    id?: number;
    private listener;
    private emitCache;
    constructor(id?: number, events?: NavigateToOptionEvents);
    emit(eventName: string, ...args: any[]): number | undefined;
    on(eventName: string, fn: EventChannelListener['fn']): void;
    once(eventName: string, fn: EventChannelListener['fn']): void;
    off(eventName: string, fn: EventChannelListener['fn']): void;
    _clearCache(eventName: string): void;
    _addListener(eventName: string, type: EventChannelListener['type'], fn: EventChannelListener['fn']): void;
}

declare interface EventChannelListener {
    type: 'on' | 'once';
    fn: (...args: any[]) => void;
}

export declare const EventModifierFlags: {
    stop: number;
    prevent: number;
    self: number;
};

export declare function formatAppLog(type: 'log' | 'info' | 'debug' | 'warn' | 'error', filename: string, ...args: unknown[]): void;

export declare function formatDateTime({ date, mode }: {
    date?: Date | undefined;
    mode?: string | undefined;
}): string;

export declare function formatLog(module: string, ...args: any[]): string;

export declare function getCustomDataset(el: HTMLElement | HTMLElementWithDataset): DOMStringMap & Record<string, any>;

export declare function getEnvLocale(): string;

export declare function getLen(str?: string): number;

export declare function getValueByDataPath(obj: any, path: string): unknown;

declare interface HTMLElementWithDataset extends HTMLElement {
    __uniDataset?: Record<string, any>;
}

export declare const I18N_JSON_DELIMITERS: [string, string];

export declare function initCustomDataset(): void;

/**
 * nodeId
 * parentNodeId
 * refNodeId
 */
export declare type InsertAction = [typeof ACTION_TYPE_INSERT, number, number, number];

export declare const invokeArrayFns: (fns: Function[], arg?: any) => any;

export declare function isBuiltInComponent(tag: string): boolean;

export declare function isCustomElement(tag: string): boolean;

export declare function isNativeTag(tag: string): boolean;

export declare function isRootHook(name: string): boolean;

export declare function isServiceCustomElement(_tag: string): boolean;

export declare function isServiceNativeTag(tag: string): boolean;

export declare interface IUniPageNode {
    pageId: number;
    pageNode: IUniPageNode | null;
    isUnmounted: boolean;
    genId: () => number;
    push: (...args: any[]) => void;
    onCreate: (thisNode: UniNode, nodeName: string | number) => UniNode;
    onInsertBefore: (thisNode: UniNode, newChild: UniNode, refChild: UniNode | null) => UniNode;
    onRemoveChild: (oldChild: UniNode) => UniNode;
    onAddEvent: (thisNode: UniNode, name: string, flag: number) => void;
    onAddWxsEvent: (thisNode: UniNode, name: string, wxsEvent: string, flag: number) => void;
    onRemoveEvent: (thisNode: UniNode, name: string) => void;
    onSetAttribute: (thisNode: UniNode, qualifiedName: string, value: unknown) => void;
    onRemoveAttribute: (thisNode: UniNode, qualifiedName: string) => void;
    onTextContent: (thisNode: UniNode, text: string) => void;
    onNodeValue: (thisNode: UniNode, val: string | null) => void;
}

export declare const JSON_PROTOCOL = "json://";

export declare const NAVBAR_HEIGHT = 44;

declare type NavigateToOptionEvents = Record<string, (...args: any[]) => void>;

export declare const NODE_TYPE_COMMENT = 8;

export declare const NODE_TYPE_ELEMENT = 1;

export declare const NODE_TYPE_PAGE = 0;

export declare const NODE_TYPE_TEXT = 3;

export declare function normalizeDataset(el: Element): any;

export declare function normalizeEventType(type: string, options?: AddEventListenerOptions): string;

export declare function normalizeTarget(el: HTMLElement): {
    id: string;
    dataset: DOMStringMap & Record<string, any>;
    offsetTop: number;
    offsetLeft: number;
};

export declare const ON_ADD_TO_FAVORITES = "onAddToFavorites";

export declare const ON_APP_ENTER_BACKGROUND = "onAppEnterBackground";

export declare const ON_APP_ENTER_FOREGROUND = "onAppEnterForeground";

export declare const ON_BACK_PRESS = "onBackPress";

export declare const ON_ERROR = "onError";

export declare const ON_HIDE = "onHide";

export declare const ON_KEYBOARD_HEIGHT_CHANGE = "onKeyboardHeightChange";

export declare const ON_LAUNCH = "onLaunch";

export declare const ON_LOAD = "onLoad";

export declare const ON_NAVIGATION_BAR_BUTTON_TAP = "onNavigationBarButtonTap";

export declare const ON_NAVIGATION_BAR_SEARCH_INPUT_CHANGED = "onNavigationBarSearchInputChanged";

export declare const ON_NAVIGATION_BAR_SEARCH_INPUT_CLICKED = "onNavigationBarSearchInputClicked";

export declare const ON_NAVIGATION_BAR_SEARCH_INPUT_CONFIRMED = "onNavigationBarSearchInputConfirmed";

export declare const ON_NAVIGATION_BAR_SEARCH_INPUT_FOCUS_CHANGED = "onNavigationBarSearchInputFocusChanged";

export declare const ON_PAGE_NOT_FOUND = "onPageNotFound";

export declare const ON_PAGE_SCROLL = "onPageScroll";

export declare const ON_PULL_DOWN_REFRESH = "onPullDownRefresh";

export declare const ON_REACH_BOTTOM = "onReachBottom";

export declare const ON_REACH_BOTTOM_DISTANCE = 50;

export declare const ON_READY = "onReady";

export declare const ON_RESIZE = "onResize";

export declare const ON_SHARE_APP_MESSAGE = "onShareAppMessage";

export declare const ON_SHARE_TIMELINE = "onShareTimeline";

export declare const ON_SHOW = "onShow";

export declare const ON_TAB_ITEM_TAP = "onTabItemTap";

export declare const ON_THEME_CHANGE = "onThemeChange";

export declare const ON_UNHANDLE_REJECTION = "onUnhandledRejection";

export declare const ON_UNLOAD = "onUnload";

export declare const ON_WEB_INVOKE_APP_SERVICE = "onWebInvokeAppService";

export declare const ON_WXS_INVOKE_CALL_METHOD = "onWxsInvokeCallMethod";

export declare function once<T extends (...args: any[]) => any>(fn: T, ctx?: unknown): T;

declare interface Options {
    success?: (res: any) => void;
    fail?: (res: any) => void;
    complete?: (res: any) => void;
}

export declare type PageAction = PageCreateAction | PageCreatedAction | PageUpdateAction | PageScrollAction;

export declare type PageCreateAction = [typeof ACTION_TYPE_PAGE_CREATE, PageCreateData];

export declare type PageCreatedAction = [typeof ACTION_TYPE_PAGE_CREATED];

export declare interface PageCreateData extends PageNodeOptions {
}

export declare interface PageNodeOptions {
    css: boolean;
    route: string;
    version: number;
    locale: string;
    platform: string;
    pixelRatio: number;
    windowWidth: number;
    disableScroll: boolean;
    onPageScroll: boolean;
    onPageReachBottom: boolean;
    onReachBottomDistance: number;
    statusbarHeight: number;
    windowTop: number;
    windowBottom: number;
}

/**
 * onReachBottomDistance
 */
export declare type PageScrollAction = [typeof ACTION_TYPE_PAGE_SCROLL, number];

export declare type PageUpdateAction = CreateAction | InsertAction | RemoveAction | AddEventAction | AddWxsEventAction | RemoveEventAction | SetAttributeAction | RemoveAttributeAction | SetTextAction;

export declare function parseEventName(name: string): [string, EventListenerOptions | undefined];

/**
 * https://github.com/vuejs/vue-router-next/blob/master/src/query.ts
 * @internal
 *
 * @param search - search string to parse
 * @returns a query object
 */
export declare function parseQuery(search: string): Record<string, any>;

export declare function parseUrl(url: string): {
    path: string;
    query: Record<string, any>;
};

export declare function passive(passive: boolean): {
    passive: boolean;
};

export declare const PLUS_RE: RegExp;

export declare function plusReady(callback: () => void): void;

export declare const PRIMARY_COLOR = "#007aff";

/**
 * nodeId
 */
export declare type RemoveAction = [typeof ACTION_TYPE_REMOVE, number];

/**
 * nodeId
 * name
 */
export declare type RemoveAttributeAction = [
typeof ACTION_TYPE_REMOVE_ATTRIBUTE,
number,
string | number
];

/**
 * nodeId
 * event
 */
export declare type RemoveEventAction = [
typeof ACTION_TYPE_REMOVE_EVENT,
number,
string | number
];

export declare function removeLeadingSlash(str: string): string;

export declare const RENDERJS_MODULES = "renderjsModules";

export declare function resolveOwnerEl(instance: ComponentInternalInstance): RendererNode | null;

export declare function resolveOwnerVm(vm: ComponentInternalInstance): ComponentPublicInstance<    {}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | undefined;

export declare const RESPONSIVE_MIN_WIDTH = 768;

export declare type Rpx2UnitOptions = typeof defaultRpx2Unit;

export declare const sanitise: (val: unknown) => any;

export declare const SCHEME_RE: RegExp;

declare function scrollTo_2(scrollTop: number | string, duration: number): void;
export { scrollTo_2 as scrollTo }

export declare const SELECTED_COLOR = "#0062cc";

/**
 * nodeId
 * name
 * value
 */
export declare type SetAttributeAction = [
typeof ACTION_TYPE_SET_ATTRIBUTE,
number,
string | number,
unknown | number
];

/**
 * nodeId
 * text
 */
export declare type SetTextAction = [
typeof ACTION_TYPE_SET_TEXT,
number,
string | number
];

export declare function stringifyQuery(obj?: Record<string, any>, encodeStr?: typeof encodeURIComponent): string;

export declare const TABBAR_HEIGHT = 50;

export declare const TAGS: string[];

export declare const UNI_SSR = "__uniSSR";

export declare const UNI_SSR_DATA = "data";

export declare const UNI_SSR_GLOBAL_DATA = "globalData";

export declare const UNI_SSR_STORE = "store";

export declare const UNI_SSR_TITLE = "title";

export declare class UniBaseNode extends UniNode {
    attributes: Record<string, unknown>;
    style: null | string | Record<string, string | string[]>;
    vShow: null | boolean;
    protected _html: string | null;
    constructor(nodeType: UniNodeType, nodeName: string, container: UniElement | IUniPageNode);
    get className(): string;
    set className(val: string);
    get innerHTML(): string;
    set innerHTML(html: string);
    addEventListener(type: string, listener: UniEventListener, options?: AddEventListenerOptions): void;
    removeEventListener(type: string, callback: UniEventListener, options?: EventListenerOptions): void;
    getAttribute(qualifiedName: string): unknown;
    removeAttribute(qualifiedName: string): void;
    setAttribute(qualifiedName: string, value: unknown): void;
    toJSON({ attr, normalize, }?: {
        attr?: boolean;
        children?: boolean;
        normalize?: (val: any, includeValue?: boolean) => any | number;
    }): Partial<UniNodeJSON>;
}

export declare class UniCommentNode extends UniNode {
    constructor(text: string, container: UniElement | IUniPageNode);
    toJSON(opts?: {
        attr?: boolean;
    }): {
        i?: undefined;
    } | {
        i: number;
    };
}

declare type UniCSSStyleDeclarationJSON = string | null | Record<string, string | string[]> | [string, Record<string, string | string[]>];

export declare class UniElement extends UniBaseNode {
    tagName: string;
    constructor(nodeName: string, container: UniElement | IUniPageNode);
}

export declare class UniEvent {
    type: string;
    bubbles: boolean;
    cancelable: boolean;
    defaultPrevented: boolean;
    detail?: Record<string, any>;
    timeStamp: number;
    _stop: boolean;
    _end: boolean;
    constructor(type: string, opts: UniEventOptions);
    preventDefault(): void;
    stopImmediatePropagation(): void;
    stopPropagation(): void;
}

export declare interface UniEventListener {
    (evt: UniEvent): void;
    modifiers?: string[];
    wxsEvent?: string;
}

declare interface UniEventOptions {
    bubbles: boolean;
    cancelable: boolean;
}

declare class UniEventTarget {
    listeners: Record<string, UniEventListener[]>;
    dispatchEvent(evt: UniEvent): boolean;
    addEventListener(type: string, listener: UniEventListener, options?: AddEventListenerOptions): void;
    removeEventListener(type: string, callback: UniEventListener, options?: AddEventListenerOptions): void;
}

export declare class UniInputElement extends UniElement {
    get value(): string | number;
    set value(val: string | number);
}

export declare const UniLifecycleHooks: readonly ["onShow", "onHide", "onLaunch", "onError", "onThemeChange", "onPageNotFound", "onUnhandledRejection", "onLoad", "onReady", "onUnload", "onResize", "onBackPress", "onPageScroll", "onTabItemTap", "onReachBottom", "onPullDownRefresh", "onShareTimeline", "onAddToFavorites", "onShareAppMessage", "onNavigationBarButtonTap", "onNavigationBarSearchInputClicked", "onNavigationBarSearchInputChanged", "onNavigationBarSearchInputConfirmed", "onNavigationBarSearchInputFocusChanged"];

export declare class UniNode extends UniEventTarget {
    nodeId?: number;
    nodeType: UniNodeType;
    nodeName: string;
    childNodes: UniNode[];
    pageNode: IUniPageNode | null;
    parentNode: UniNode | null;
    __vueParentComponent?: ComponentInternalInstance;
    protected _text: string | null;
    constructor(nodeType: UniNodeType, nodeName: string, container: UniElement | IUniPageNode);
    get firstChild(): UniNode | null;
    get lastChild(): UniNode | null;
    get nextSibling(): UniNode | null;
    get nodeValue(): string | null;
    set nodeValue(_val: string | null);
    get textContent(): string;
    set textContent(text: string);
    get parentElement(): UniElement | null;
    get previousSibling(): UniNode | null;
    appendChild(newChild: UniNode): UniNode;
    cloneNode(deep?: boolean): UniNode;
    insertBefore(newChild: UniNode, refChild: UniNode | null): UniNode;
    removeChild(oldChild: UniNode): UniNode;
}

export declare interface UniNodeJSON {
    /**
     * nodeId
     */
    i: number;
    /**
     * nodeName
     */
    n: string | number;
    /**
     * attributes
     */
    a: Record<string, unknown>;
    /**
     * listeners
     */
    e: Record<string, number>;
    /**
     * wxs listeners
     */
    w: Record<string, [string, number]>;
    /**
     * style
     */
    s?: UniCSSStyleDeclarationJSON;
    /**
     * text
     */
    t?: string;
}

declare interface UniNodeJSONMinify {
    /**
     * nodeId
     */
    i: number;
    /**
     * nodeName
     */
    n: string | number;
    /**
     * attributes
     */
    a: DictArray;
    /**
     * listeners
     */
    e: DictArray;
    /**
     * wxs listeners
     */
    w: [number, [number, number]][];
    /**
     * style
     */
    s?: DictArray;
    /**
     * text
     */
    t?: number;
}

declare type UniNodeType = typeof NODE_TYPE_PAGE | typeof NODE_TYPE_ELEMENT | typeof NODE_TYPE_TEXT | typeof NODE_TYPE_COMMENT;

export declare class UniTextAreaElement extends UniInputElement {
}

export declare class UniTextNode extends UniBaseNode {
    constructor(text: string, container: UniElement | IUniPageNode);
    get nodeValue(): string;
    set nodeValue(text: string);
}

export declare function updateElementStyle(element: HTMLElement, styles: Partial<CSSStyleDeclaration>): void;

export declare const WEB_INVOKE_APPSERVICE = "WEB_INVOKE_APPSERVICE";

export declare const WXS_MODULES = "wxsModules";

export declare const WXS_PROTOCOL = "wxs://";

export { }