declare namespace SPECTOR {
    interface IEvent<T> {
        add(callback: (element: T) => void, context?: any): number;
        remove(id: number): void;
        clear(): void;
        trigger(value: T): void;
    }
    type EventConstructor = {
        new <T>(): IEvent<T>;
    };
}
declare namespace SPECTOR.Utils {
    class Event<T> {
        private callbacks;
        private counter;
        add(callback: (element: T) => void, context?: any): number;
        remove(id: number): void;
        clear(): void;
        trigger(value: T): void;
    }
}
declare namespace SPECTOR {
    enum LogLevel {
        noLog = 0,
        error = 1,
        warning = 2,
        info = 3,
    }
    interface ILogger {
        setLevel(level: LogLevel): void;
        error(msg: string, ...restOfMsg: string[]): void;
        warn(msg: string, ...restOfMsg: string[]): void;
        info(msg: string, ...restOfMsg: string[]): void;
    }
    type LoggerConstructor = {
        new (level?: LogLevel): Utils.ConsoleLogger;
    };
}
declare namespace SPECTOR.Utils {
    class ConsoleLogger implements ILogger {
        private level;
        constructor(level?: LogLevel);
        setLevel(level: LogLevel): void;
        error(msg: string, ...restOfMsg: string[]): void;
        warn(msg: string, ...restOfMsg: string[]): void;
        info(msg: string, ...restOfMsg: string[]): void;
    }
}
declare namespace SPECTOR {
    interface IStackTrace {
        getStackTrace(removeFirstNCalls?: number, removeLastNCalls?: number): string[];
    }
    type StackTraceConstructor = {
        new (): IStackTrace;
    };
}
declare namespace SPECTOR.Utils {
    class StackTrace implements IStackTrace {
        getStackTrace(removeFirstNCalls?: number, removeLastNCalls?: number): string[];
    }
}
declare namespace SPECTOR {
    interface ITime {
        readonly now: number;
    }
    type TimeConstructor = {
        new (): ITime;
    };
}
declare namespace SPECTOR.Utils {
    class Time implements ITime {
        private readonly nowFunction;
        constructor();
        private dateBasedPerformanceNow();
        readonly now: number;
    }
}
declare namespace SPECTOR {
    function merge<T, U>(first: T, second: U): T & U;
}
declare namespace SPECTOR {
    interface ICanvasCapture {
        width: number;
        height: number;
        clientWidth: number;
        clientHeight: number;
        browserAgent: string;
    }
}
declare namespace SPECTOR {
    interface IContextCapture {
        version: number;
        contextAttributes: any;
        capabilities: {
            [name: string]: any;
        };
        extensions: {
            [name: string]: boolean;
        };
        compressedTextures: {
            [name: string]: any;
        };
    }
}
declare namespace SPECTOR {
    type State = {
        [stateName: string]: any;
    };
    type CommandCapturedCallback = (command: ICommandCapture) => void;
    type CommandCapturedCallbacks = {
        [name: string]: CommandCapturedCallback[];
    };
    const enum CommandCaptureStatus {
        Unknown = 0,
        Unused = 10,
        Disabled = 20,
        Redundant = 30,
        Valid = 40,
        Deprecated = 50,
    }
    interface ICommandCapture extends State {
        id: number;
        startTime: number;
        commandEndTime: number;
        endTime: number;
        name: string;
        commandArguments: IArguments;
        result: any;
        stackTrace: string[];
        status: CommandCaptureStatus;
        text: string;
        consumeCommandId?: number;
        [stateName: string]: any;
    }
}
declare namespace SPECTOR {
    interface ICapture {
        canvas: ICanvasCapture;
        context: IContextCapture;
        initState: State;
        commands: ICommandCapture[];
        endState: State;
        startTime: number;
        listenCommandsStartTime: number;
        listenCommandsEndTime: number;
        endTime: number;
    }
}
declare namespace SPECTOR {
    type FunctionIndexer = {
        [key: string]: any;
    };
    type FunctionCallback = (functionInformation: IFunctionInformation) => void;
    type FunctionCallbacks = {
        [name: string]: FunctionCallback[];
    };
    interface IFunctionInformation {
        readonly name: string;
        readonly arguments: IArguments;
        readonly result: any;
        readonly startTime: number;
        readonly endTime: number;
    }
}
declare namespace SPECTOR {
    type WebGLRenderingContexts = (WebGLRenderingContext | WebGL2RenderingContext);
    type ExtensionList = {
        [key: string]: any;
    };
    interface IContextInformation {
        readonly context: WebGLRenderingContexts;
        readonly contextVersion: number;
        readonly toggleCapture?: (capture: boolean) => void;
        readonly tagWebGlObject?: (object: any) => WebGlObjectTag;
        readonly extensions?: ExtensionList;
    }
}
declare namespace SPECTOR {
    interface WebGlConstant {
        readonly name: string;
        readonly value: number;
        readonly description: string;
        readonly extensionName?: string;
    }
    class WebGlConstants {
        protected static readonly zeroMeaningByCommand: {
            [commandName: string]: string;
        };
        protected static readonly oneMeaningByCommand: {
            [commandName: string]: string;
        };
        static isWebGlConstant(value: number): boolean;
        static stringifyWebGlConstant(value: number, command: string): string;
        static readonly DEPTH_BUFFER_BIT: WebGlConstant;
        static readonly STENCIL_BUFFER_BIT: WebGlConstant;
        static readonly COLOR_BUFFER_BIT: WebGlConstant;
        static readonly POINTS: WebGlConstant;
        static readonly LINES: WebGlConstant;
        static readonly LINE_LOOP: WebGlConstant;
        static readonly LINE_STRIP: WebGlConstant;
        static readonly TRIANGLES: WebGlConstant;
        static readonly TRIANGLE_STRIP: WebGlConstant;
        static readonly TRIANGLE_FAN: WebGlConstant;
        static readonly ZERO: WebGlConstant;
        static readonly ONE: WebGlConstant;
        static readonly SRC_COLOR: WebGlConstant;
        static readonly ONE_MINUS_SRC_COLOR: WebGlConstant;
        static readonly SRC_ALPHA: WebGlConstant;
        static readonly ONE_MINUS_SRC_ALPHA: WebGlConstant;
        static readonly DST_ALPHA: WebGlConstant;
        static readonly ONE_MINUS_DST_ALPHA: WebGlConstant;
        static readonly DST_COLOR: WebGlConstant;
        static readonly ONE_MINUS_DST_COLOR: WebGlConstant;
        static readonly SRC_ALPHA_SATURATE: WebGlConstant;
        static readonly CONSTANT_COLOR: WebGlConstant;
        static readonly ONE_MINUS_CONSTANT_COLOR: WebGlConstant;
        static readonly CONSTANT_ALPHA: WebGlConstant;
        static readonly ONE_MINUS_CONSTANT_ALPHA: WebGlConstant;
        static readonly FUNC_ADD: WebGlConstant;
        static readonly FUNC_SUBSTRACT: WebGlConstant;
        static readonly FUNC_REVERSE_SUBTRACT: WebGlConstant;
        static readonly BLEND_EQUATION: WebGlConstant;
        static readonly BLEND_EQUATION_RGB: WebGlConstant;
        static readonly BLEND_EQUATION_ALPHA: WebGlConstant;
        static readonly BLEND_DST_RGB: WebGlConstant;
        static readonly BLEND_SRC_RGB: WebGlConstant;
        static readonly BLEND_DST_ALPHA: WebGlConstant;
        static readonly BLEND_SRC_ALPHA: WebGlConstant;
        static readonly BLEND_COLOR: WebGlConstant;
        static readonly ARRAY_BUFFER_BINDING: WebGlConstant;
        static readonly ELEMENT_ARRAY_BUFFER_BINDING: WebGlConstant;
        static readonly LINE_WIDTH: WebGlConstant;
        static readonly ALIASED_POINT_SIZE_RANGE: WebGlConstant;
        static readonly ALIASED_LINE_WIDTH_RANGE: WebGlConstant;
        static readonly CULL_FACE_MODE: WebGlConstant;
        static readonly FRONT_FACE: WebGlConstant;
        static readonly DEPTH_RANGE: WebGlConstant;
        static readonly DEPTH_WRITEMASK: WebGlConstant;
        static readonly DEPTH_CLEAR_VALUE: WebGlConstant;
        static readonly DEPTH_FUNC: WebGlConstant;
        static readonly STENCIL_CLEAR_VALUE: WebGlConstant;
        static readonly STENCIL_FUNC: WebGlConstant;
        static readonly STENCIL_FAIL: WebGlConstant;
        static readonly STENCIL_PASS_DEPTH_FAIL: WebGlConstant;
        static readonly STENCIL_PASS_DEPTH_PASS: WebGlConstant;
        static readonly STENCIL_REF: WebGlConstant;
        static readonly STENCIL_VALUE_MASK: WebGlConstant;
        static readonly STENCIL_WRITEMASK: WebGlConstant;
        static readonly STENCIL_BACK_FUNC: WebGlConstant;
        static readonly STENCIL_BACK_FAIL: WebGlConstant;
        static readonly STENCIL_BACK_PASS_DEPTH_FAIL: WebGlConstant;
        static readonly STENCIL_BACK_PASS_DEPTH_PASS: WebGlConstant;
        static readonly STENCIL_BACK_REF: WebGlConstant;
        static readonly STENCIL_BACK_VALUE_MASK: WebGlConstant;
        static readonly STENCIL_BACK_WRITEMASK: WebGlConstant;
        static readonly VIEWPORT: WebGlConstant;
        static readonly SCISSOR_BOX: WebGlConstant;
        static readonly COLOR_CLEAR_VALUE: WebGlConstant;
        static readonly COLOR_WRITEMASK: WebGlConstant;
        static readonly UNPACK_ALIGNMENT: WebGlConstant;
        static readonly PACK_ALIGNMENT: WebGlConstant;
        static readonly MAX_TEXTURE_SIZE: WebGlConstant;
        static readonly MAX_VIEWPORT_DIMS: WebGlConstant;
        static readonly SUBPIXEL_BITS: WebGlConstant;
        static readonly RED_BITS: WebGlConstant;
        static readonly GREEN_BITS: WebGlConstant;
        static readonly BLUE_BITS: WebGlConstant;
        static readonly ALPHA_BITS: WebGlConstant;
        static readonly DEPTH_BITS: WebGlConstant;
        static readonly STENCIL_BITS: WebGlConstant;
        static readonly POLYGON_OFFSET_UNITS: WebGlConstant;
        static readonly POLYGON_OFFSET_FACTOR: WebGlConstant;
        static readonly TEXTURE_BINDING_2D: WebGlConstant;
        static readonly SAMPLE_BUFFERS: WebGlConstant;
        static readonly SAMPLES: WebGlConstant;
        static readonly SAMPLE_COVERAGE_VALUE: WebGlConstant;
        static readonly SAMPLE_COVERAGE_INVERT: WebGlConstant;
        static readonly COMPRESSED_TEXTURE_FORMATS: WebGlConstant;
        static readonly VENDOR: WebGlConstant;
        static readonly RENDERER: WebGlConstant;
        static readonly VERSION: WebGlConstant;
        static readonly IMPLEMENTATION_COLOR_READ_TYPE: WebGlConstant;
        static readonly IMPLEMENTATION_COLOR_READ_FORMAT: WebGlConstant;
        static readonly BROWSER_DEFAULT_WEBGL: WebGlConstant;
        static readonly STATIC_DRAW: WebGlConstant;
        static readonly STREAM_DRAW: WebGlConstant;
        static readonly DYNAMIC_DRAW: WebGlConstant;
        static readonly ARRAY_BUFFER: WebGlConstant;
        static readonly ELEMENT_ARRAY_BUFFER: WebGlConstant;
        static readonly BUFFER_SIZE: WebGlConstant;
        static readonly BUFFER_USAGE: WebGlConstant;
        static readonly CURRENT_VERTEX_ATTRIB: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_ENABLED: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_SIZE: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_STRIDE: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_TYPE: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_POINTER: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: WebGlConstant;
        static readonly CULL_FACE: WebGlConstant;
        static readonly FRONT: WebGlConstant;
        static readonly BACK: WebGlConstant;
        static readonly FRONT_AND_BACK: WebGlConstant;
        static readonly BLEND: WebGlConstant;
        static readonly DEPTH_TEST: WebGlConstant;
        static readonly DITHER: WebGlConstant;
        static readonly POLYGON_OFFSET_FILL: WebGlConstant;
        static readonly SAMPLE_ALPHA_TO_COVERAGE: WebGlConstant;
        static readonly SAMPLE_COVERAGE: WebGlConstant;
        static readonly SCISSOR_TEST: WebGlConstant;
        static readonly STENCIL_TEST: WebGlConstant;
        static readonly NO_ERROR: WebGlConstant;
        static readonly INVALID_ENUM: WebGlConstant;
        static readonly INVALID_VALUE: WebGlConstant;
        static readonly INVALID_OPERATION: WebGlConstant;
        static readonly OUT_OF_MEMORY: WebGlConstant;
        static readonly CONTEXT_LOST_WEBGL: WebGlConstant;
        static readonly CW: WebGlConstant;
        static readonly CCW: WebGlConstant;
        static readonly DONT_CARE: WebGlConstant;
        static readonly FASTEST: WebGlConstant;
        static readonly NICEST: WebGlConstant;
        static readonly GENERATE_MIPMAP_HINT: WebGlConstant;
        static readonly BYTE: WebGlConstant;
        static readonly UNSIGNED_BYTE: WebGlConstant;
        static readonly SHORT: WebGlConstant;
        static readonly UNSIGNED_SHORT: WebGlConstant;
        static readonly INT: WebGlConstant;
        static readonly UNSIGNED_INT: WebGlConstant;
        static readonly FLOAT: WebGlConstant;
        static readonly DEPTH_COMPONENT: WebGlConstant;
        static readonly ALPHA: WebGlConstant;
        static readonly RGB: WebGlConstant;
        static readonly RGBA: WebGlConstant;
        static readonly LUMINANCE: WebGlConstant;
        static readonly LUMINANCE_ALPHA: WebGlConstant;
        static readonly UNSIGNED_SHORT_4_4_4_4: WebGlConstant;
        static readonly UNSIGNED_SHORT_5_5_5_1: WebGlConstant;
        static readonly UNSIGNED_SHORT_5_6_5: WebGlConstant;
        static readonly FRAGMENT_SHADER: WebGlConstant;
        static readonly VERTEX_SHADER: WebGlConstant;
        static readonly COMPILE_STATUS: WebGlConstant;
        static readonly DELETE_STATUS: WebGlConstant;
        static readonly LINK_STATUS: WebGlConstant;
        static readonly VALIDATE_STATUS: WebGlConstant;
        static readonly ATTACHED_SHADERS: WebGlConstant;
        static readonly ACTIVE_ATTRIBUTES: WebGlConstant;
        static readonly ACTIVE_UNIFORMS: WebGlConstant;
        static readonly MAX_VERTEX_ATTRIBS: WebGlConstant;
        static readonly MAX_VERTEX_UNIFORM_VECTORS: WebGlConstant;
        static readonly MAX_VARYING_VECTORS: WebGlConstant;
        static readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: WebGlConstant;
        static readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: WebGlConstant;
        static readonly MAX_TEXTURE_IMAGE_UNITS: WebGlConstant;
        static readonly MAX_FRAGMENT_UNIFORM_VECTORS: WebGlConstant;
        static readonly SHADER_TYPE: WebGlConstant;
        static readonly SHADING_LANGUAGE_VERSION: WebGlConstant;
        static readonly CURRENT_PROGRAM: WebGlConstant;
        static readonly NEVER: WebGlConstant;
        static readonly ALWAYS: WebGlConstant;
        static readonly LESS: WebGlConstant;
        static readonly EQUAL: WebGlConstant;
        static readonly LEQUAL: WebGlConstant;
        static readonly GREATER: WebGlConstant;
        static readonly GEQUAL: WebGlConstant;
        static readonly NOTEQUAL: WebGlConstant;
        static readonly KEEP: WebGlConstant;
        static readonly REPLACE: WebGlConstant;
        static readonly INCR: WebGlConstant;
        static readonly DECR: WebGlConstant;
        static readonly INVERT: WebGlConstant;
        static readonly INCR_WRAP: WebGlConstant;
        static readonly DECR_WRAP: WebGlConstant;
        static readonly NEAREST: WebGlConstant;
        static readonly LINEAR: WebGlConstant;
        static readonly NEAREST_MIPMAP_NEAREST: WebGlConstant;
        static readonly LINEAR_MIPMAP_NEAREST: WebGlConstant;
        static readonly NEAREST_MIPMAP_LINEAR: WebGlConstant;
        static readonly LINEAR_MIPMAP_LINEAR: WebGlConstant;
        static readonly TEXTURE_MAG_FILTER: WebGlConstant;
        static readonly TEXTURE_MIN_FILTER: WebGlConstant;
        static readonly TEXTURE_WRAP_S: WebGlConstant;
        static readonly TEXTURE_WRAP_T: WebGlConstant;
        static readonly TEXTURE_2D: WebGlConstant;
        static readonly TEXTURE: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP: WebGlConstant;
        static readonly TEXTURE_BINDING_CUBE_MAP: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_POSITIVE_X: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_NEGATIVE_X: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_POSITIVE_Y: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_POSITIVE_Z: WebGlConstant;
        static readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: WebGlConstant;
        static readonly MAX_CUBE_MAP_TEXTURE_SIZE: WebGlConstant;
        static readonly TEXTURE0: WebGlConstant;
        static readonly TEXTURE1: WebGlConstant;
        static readonly TEXTURE2: WebGlConstant;
        static readonly TEXTURE3: WebGlConstant;
        static readonly TEXTURE4: WebGlConstant;
        static readonly TEXTURE5: WebGlConstant;
        static readonly TEXTURE6: WebGlConstant;
        static readonly TEXTURE7: WebGlConstant;
        static readonly TEXTURE8: WebGlConstant;
        static readonly TEXTURE9: WebGlConstant;
        static readonly TEXTURE10: WebGlConstant;
        static readonly TEXTURE11: WebGlConstant;
        static readonly TEXTURE12: WebGlConstant;
        static readonly TEXTURE13: WebGlConstant;
        static readonly TEXTURE14: WebGlConstant;
        static readonly TEXTURE15: WebGlConstant;
        static readonly TEXTURE16: WebGlConstant;
        static readonly TEXTURE17: WebGlConstant;
        static readonly TEXTURE18: WebGlConstant;
        static readonly TEXTURE19: WebGlConstant;
        static readonly TEXTURE20: WebGlConstant;
        static readonly TEXTURE21: WebGlConstant;
        static readonly TEXTURE22: WebGlConstant;
        static readonly TEXTURE23: WebGlConstant;
        static readonly TEXTURE24: WebGlConstant;
        static readonly TEXTURE25: WebGlConstant;
        static readonly TEXTURE26: WebGlConstant;
        static readonly TEXTURE27: WebGlConstant;
        static readonly TEXTURE28: WebGlConstant;
        static readonly TEXTURE29: WebGlConstant;
        static readonly TEXTURE30: WebGlConstant;
        static readonly TEXTURE31: WebGlConstant;
        static readonly ACTIVE_TEXTURE: WebGlConstant;
        static readonly REPEAT: WebGlConstant;
        static readonly CLAMP_TO_EDGE: WebGlConstant;
        static readonly MIRRORED_REPEAT: WebGlConstant;
        static readonly FLOAT_VEC2: WebGlConstant;
        static readonly FLOAT_VEC3: WebGlConstant;
        static readonly FLOAT_VEC4: WebGlConstant;
        static readonly INT_VEC2: WebGlConstant;
        static readonly INT_VEC3: WebGlConstant;
        static readonly INT_VEC4: WebGlConstant;
        static readonly BOOL: WebGlConstant;
        static readonly BOOL_VEC2: WebGlConstant;
        static readonly BOOL_VEC3: WebGlConstant;
        static readonly BOOL_VEC4: WebGlConstant;
        static readonly FLOAT_MAT2: WebGlConstant;
        static readonly FLOAT_MAT3: WebGlConstant;
        static readonly FLOAT_MAT4: WebGlConstant;
        static readonly SAMPLER_2D: WebGlConstant;
        static readonly SAMPLER_CUBE: WebGlConstant;
        static readonly LOW_FLOAT: WebGlConstant;
        static readonly MEDIUM_FLOAT: WebGlConstant;
        static readonly HIGH_FLOAT: WebGlConstant;
        static readonly LOW_INT: WebGlConstant;
        static readonly MEDIUM_INT: WebGlConstant;
        static readonly HIGH_INT: WebGlConstant;
        static readonly FRAMEBUFFER: WebGlConstant;
        static readonly RENDERBUFFER: WebGlConstant;
        static readonly RGBA4: WebGlConstant;
        static readonly RGB5_A1: WebGlConstant;
        static readonly RGB565: WebGlConstant;
        static readonly DEPTH_COMPONENT16: WebGlConstant;
        static readonly STENCIL_INDEX: WebGlConstant;
        static readonly STENCIL_INDEX8: WebGlConstant;
        static readonly DEPTH_STENCIL: WebGlConstant;
        static readonly RENDERBUFFER_WIDTH: WebGlConstant;
        static readonly RENDERBUFFER_HEIGHT: WebGlConstant;
        static readonly RENDERBUFFER_INTERNAL_FORMAT: WebGlConstant;
        static readonly RENDERBUFFER_RED_SIZE: WebGlConstant;
        static readonly RENDERBUFFER_GREEN_SIZE: WebGlConstant;
        static readonly RENDERBUFFER_BLUE_SIZE: WebGlConstant;
        static readonly RENDERBUFFER_ALPHA_SIZE: WebGlConstant;
        static readonly RENDERBUFFER_DEPTH_SIZE: WebGlConstant;
        static readonly RENDERBUFFER_STENCIL_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: WebGlConstant;
        static readonly COLOR_ATTACHMENT0: WebGlConstant;
        static readonly DEPTH_ATTACHMENT: WebGlConstant;
        static readonly STENCIL_ATTACHMENT: WebGlConstant;
        static readonly DEPTH_STENCIL_ATTACHMENT: WebGlConstant;
        static readonly NONE: WebGlConstant;
        static readonly FRAMEBUFFER_COMPLETE: WebGlConstant;
        static readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: WebGlConstant;
        static readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: WebGlConstant;
        static readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: WebGlConstant;
        static readonly FRAMEBUFFER_UNSUPPORTED: WebGlConstant;
        static readonly FRAMEBUFFER_BINDING: WebGlConstant;
        static readonly RENDERBUFFER_BINDING: WebGlConstant;
        static readonly MAX_RENDERBUFFER_SIZE: WebGlConstant;
        static readonly INVALID_FRAMEBUFFER_OPERATION: WebGlConstant;
        static readonly UNPACK_FLIP_Y_WEBGL: WebGlConstant;
        static readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: WebGlConstant;
        static readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: WebGlConstant;
        static readonly READ_BUFFER: WebGlConstant;
        static readonly UNPACK_ROW_LENGTH: WebGlConstant;
        static readonly UNPACK_SKIP_ROWS: WebGlConstant;
        static readonly UNPACK_SKIP_PIXELS: WebGlConstant;
        static readonly PACK_ROW_LENGTH: WebGlConstant;
        static readonly PACK_SKIP_ROWS: WebGlConstant;
        static readonly PACK_SKIP_PIXELS: WebGlConstant;
        static readonly TEXTURE_BINDING_3D: WebGlConstant;
        static readonly UNPACK_SKIP_IMAGES: WebGlConstant;
        static readonly UNPACK_IMAGE_HEIGHT: WebGlConstant;
        static readonly MAX_3D_TEXTURE_SIZE: WebGlConstant;
        static readonly MAX_ELEMENTS_VERTICES: WebGlConstant;
        static readonly MAX_ELEMENTS_INDICES: WebGlConstant;
        static readonly MAX_TEXTURE_LOD_BIAS: WebGlConstant;
        static readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: WebGlConstant;
        static readonly MAX_VERTEX_UNIFORM_COMPONENTS: WebGlConstant;
        static readonly MAX_ARRAY_TEXTURE_LAYERS: WebGlConstant;
        static readonly MIN_PROGRAM_TEXEL_OFFSET: WebGlConstant;
        static readonly MAX_PROGRAM_TEXEL_OFFSET: WebGlConstant;
        static readonly MAX_VARYING_COMPONENTS: WebGlConstant;
        static readonly FRAGMENT_SHADER_DERIVATIVE_HINT: WebGlConstant;
        static readonly RASTERIZER_DISCARD: WebGlConstant;
        static readonly VERTEX_ARRAY_BINDING: WebGlConstant;
        static readonly MAX_VERTEX_OUTPUT_COMPONENTS: WebGlConstant;
        static readonly MAX_FRAGMENT_INPUT_COMPONENTS: WebGlConstant;
        static readonly MAX_SERVER_WAIT_TIMEOUT: WebGlConstant;
        static readonly MAX_ELEMENT_INDEX: WebGlConstant;
        static readonly RED: WebGlConstant;
        static readonly RGB8: WebGlConstant;
        static readonly RGBA8: WebGlConstant;
        static readonly RGB10_A2: WebGlConstant;
        static readonly TEXTURE_3D: WebGlConstant;
        static readonly TEXTURE_WRAP_R: WebGlConstant;
        static readonly TEXTURE_MIN_LOD: WebGlConstant;
        static readonly TEXTURE_MAX_LOD: WebGlConstant;
        static readonly TEXTURE_BASE_LEVEL: WebGlConstant;
        static readonly TEXTURE_MAX_LEVEL: WebGlConstant;
        static readonly TEXTURE_COMPARE_MODE: WebGlConstant;
        static readonly TEXTURE_COMPARE_FUNC: WebGlConstant;
        static readonly SRGB: WebGlConstant;
        static readonly SRGB8: WebGlConstant;
        static readonly SRGB8_ALPHA8: WebGlConstant;
        static readonly COMPARE_REF_TO_TEXTURE: WebGlConstant;
        static readonly RGBA32F: WebGlConstant;
        static readonly RGB32F: WebGlConstant;
        static readonly RGBA16F: WebGlConstant;
        static readonly RGB16F: WebGlConstant;
        static readonly TEXTURE_2D_ARRAY: WebGlConstant;
        static readonly TEXTURE_BINDING_2D_ARRAY: WebGlConstant;
        static readonly R11F_G11F_B10F: WebGlConstant;
        static readonly RGB9_E5: WebGlConstant;
        static readonly RGBA32UI: WebGlConstant;
        static readonly RGB32UI: WebGlConstant;
        static readonly RGBA16UI: WebGlConstant;
        static readonly RGB16UI: WebGlConstant;
        static readonly RGBA8UI: WebGlConstant;
        static readonly RGB8UI: WebGlConstant;
        static readonly RGBA32I: WebGlConstant;
        static readonly RGB32I: WebGlConstant;
        static readonly RGBA16I: WebGlConstant;
        static readonly RGB16I: WebGlConstant;
        static readonly RGBA8I: WebGlConstant;
        static readonly RGB8I: WebGlConstant;
        static readonly RED_INTEGER: WebGlConstant;
        static readonly RGB_INTEGER: WebGlConstant;
        static readonly RGBA_INTEGER: WebGlConstant;
        static readonly R8: WebGlConstant;
        static readonly RG8: WebGlConstant;
        static readonly R16F: WebGlConstant;
        static readonly R32F: WebGlConstant;
        static readonly RG16F: WebGlConstant;
        static readonly RG32F: WebGlConstant;
        static readonly R8I: WebGlConstant;
        static readonly R8UI: WebGlConstant;
        static readonly R16I: WebGlConstant;
        static readonly R16UI: WebGlConstant;
        static readonly R32I: WebGlConstant;
        static readonly R32UI: WebGlConstant;
        static readonly RG8I: WebGlConstant;
        static readonly RG8UI: WebGlConstant;
        static readonly RG16I: WebGlConstant;
        static readonly RG16UI: WebGlConstant;
        static readonly RG32I: WebGlConstant;
        static readonly RG32UI: WebGlConstant;
        static readonly R8_SNORM: WebGlConstant;
        static readonly RG8_SNORM: WebGlConstant;
        static readonly RGB8_SNORM: WebGlConstant;
        static readonly RGBA8_SNORM: WebGlConstant;
        static readonly RGB10_A2UI: WebGlConstant;
        static readonly TEXTURE_IMMUTABLE_FORMAT: WebGlConstant;
        static readonly TEXTURE_IMMUTABLE_LEVELS: WebGlConstant;
        static readonly UNSIGNED_INT_2_10_10_10_REV: WebGlConstant;
        static readonly UNSIGNED_INT_10F_11F_11F_REV: WebGlConstant;
        static readonly UNSIGNED_INT_5_9_9_9_REV: WebGlConstant;
        static readonly FLOAT_32_UNSIGNED_INT_24_8_REV: WebGlConstant;
        static readonly UNSIGNED_INT_24_8: WebGlConstant;
        static readonly HALF_FLOAT: WebGlConstant;
        static readonly RG: WebGlConstant;
        static readonly RG_INTEGER: WebGlConstant;
        static readonly INT_2_10_10_10_REV: WebGlConstant;
        static readonly CURRENT_QUERY: WebGlConstant;
        static readonly QUERY_RESULT: WebGlConstant;
        static readonly QUERY_RESULT_AVAILABLE: WebGlConstant;
        static readonly ANY_SAMPLES_PASSED: WebGlConstant;
        static readonly ANY_SAMPLES_PASSED_CONSERVATIVE: WebGlConstant;
        static readonly MAX_DRAW_BUFFERS: WebGlConstant;
        static readonly DRAW_BUFFER0: WebGlConstant;
        static readonly DRAW_BUFFER1: WebGlConstant;
        static readonly DRAW_BUFFER2: WebGlConstant;
        static readonly DRAW_BUFFER3: WebGlConstant;
        static readonly DRAW_BUFFER4: WebGlConstant;
        static readonly DRAW_BUFFER5: WebGlConstant;
        static readonly DRAW_BUFFER6: WebGlConstant;
        static readonly DRAW_BUFFER7: WebGlConstant;
        static readonly DRAW_BUFFER8: WebGlConstant;
        static readonly DRAW_BUFFER9: WebGlConstant;
        static readonly DRAW_BUFFER10: WebGlConstant;
        static readonly DRAW_BUFFER11: WebGlConstant;
        static readonly DRAW_BUFFER12: WebGlConstant;
        static readonly DRAW_BUFFER13: WebGlConstant;
        static readonly DRAW_BUFFER14: WebGlConstant;
        static readonly DRAW_BUFFER15: WebGlConstant;
        static readonly MAX_COLOR_ATTACHMENTS: WebGlConstant;
        static readonly COLOR_ATTACHMENT1: WebGlConstant;
        static readonly COLOR_ATTACHMENT2: WebGlConstant;
        static readonly COLOR_ATTACHMENT3: WebGlConstant;
        static readonly COLOR_ATTACHMENT4: WebGlConstant;
        static readonly COLOR_ATTACHMENT5: WebGlConstant;
        static readonly COLOR_ATTACHMENT6: WebGlConstant;
        static readonly COLOR_ATTACHMENT7: WebGlConstant;
        static readonly COLOR_ATTACHMENT8: WebGlConstant;
        static readonly COLOR_ATTACHMENT9: WebGlConstant;
        static readonly COLOR_ATTACHMENT10: WebGlConstant;
        static readonly COLOR_ATTACHMENT11: WebGlConstant;
        static readonly COLOR_ATTACHMENT12: WebGlConstant;
        static readonly COLOR_ATTACHMENT13: WebGlConstant;
        static readonly COLOR_ATTACHMENT14: WebGlConstant;
        static readonly COLOR_ATTACHMENT15: WebGlConstant;
        static readonly SAMPLER_3D: WebGlConstant;
        static readonly SAMPLER_2D_SHADOW: WebGlConstant;
        static readonly SAMPLER_2D_ARRAY: WebGlConstant;
        static readonly SAMPLER_2D_ARRAY_SHADOW: WebGlConstant;
        static readonly SAMPLER_CUBE_SHADOW: WebGlConstant;
        static readonly INT_SAMPLER_2D: WebGlConstant;
        static readonly INT_SAMPLER_3D: WebGlConstant;
        static readonly INT_SAMPLER_CUBE: WebGlConstant;
        static readonly INT_SAMPLER_2D_ARRAY: WebGlConstant;
        static readonly UNSIGNED_INT_SAMPLER_2D: WebGlConstant;
        static readonly UNSIGNED_INT_SAMPLER_3D: WebGlConstant;
        static readonly UNSIGNED_INT_SAMPLER_CUBE: WebGlConstant;
        static readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: WebGlConstant;
        static readonly MAX_SAMPLES: WebGlConstant;
        static readonly SAMPLER_BINDING: WebGlConstant;
        static readonly PIXEL_PACK_BUFFER: WebGlConstant;
        static readonly PIXEL_UNPACK_BUFFER: WebGlConstant;
        static readonly PIXEL_PACK_BUFFER_BINDING: WebGlConstant;
        static readonly PIXEL_UNPACK_BUFFER_BINDING: WebGlConstant;
        static readonly COPY_READ_BUFFER: WebGlConstant;
        static readonly COPY_WRITE_BUFFER: WebGlConstant;
        static readonly COPY_READ_BUFFER_BINDING: WebGlConstant;
        static readonly COPY_WRITE_BUFFER_BINDING: WebGlConstant;
        static readonly FLOAT_MAT2x3: WebGlConstant;
        static readonly FLOAT_MAT2x4: WebGlConstant;
        static readonly FLOAT_MAT3x2: WebGlConstant;
        static readonly FLOAT_MAT3x4: WebGlConstant;
        static readonly FLOAT_MAT4x2: WebGlConstant;
        static readonly FLOAT_MAT4x3: WebGlConstant;
        static readonly UNSIGNED_INT_VEC2: WebGlConstant;
        static readonly UNSIGNED_INT_VEC3: WebGlConstant;
        static readonly UNSIGNED_INT_VEC4: WebGlConstant;
        static readonly UNSIGNED_NORMALIZED: WebGlConstant;
        static readonly SIGNED_NORMALIZED: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_INTEGER: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_DIVISOR: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BUFFER_MODE: WebGlConstant;
        static readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_VARYINGS: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BUFFER_START: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: WebGlConstant;
        static readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: WebGlConstant;
        static readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: WebGlConstant;
        static readonly INTERLEAVED_ATTRIBS: WebGlConstant;
        static readonly SEPARATE_ATTRIBS: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BUFFER: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_PAUSED: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_ACTIVE: WebGlConstant;
        static readonly TRANSFORM_FEEDBACK_BINDING: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: WebGlConstant;
        static readonly FRAMEBUFFER_DEFAULT: WebGlConstant;
        static readonly DEPTH24_STENCIL8: WebGlConstant;
        static readonly DRAW_FRAMEBUFFER_BINDING: WebGlConstant;
        static readonly READ_FRAMEBUFFER: WebGlConstant;
        static readonly DRAW_FRAMEBUFFER: WebGlConstant;
        static readonly READ_FRAMEBUFFER_BINDING: WebGlConstant;
        static readonly RENDERBUFFER_SAMPLES: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: WebGlConstant;
        static readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: WebGlConstant;
        static readonly UNIFORM_BUFFER: WebGlConstant;
        static readonly UNIFORM_BUFFER_BINDING: WebGlConstant;
        static readonly UNIFORM_BUFFER_START: WebGlConstant;
        static readonly UNIFORM_BUFFER_SIZE: WebGlConstant;
        static readonly MAX_VERTEX_UNIFORM_BLOCKS: WebGlConstant;
        static readonly MAX_FRAGMENT_UNIFORM_BLOCKS: WebGlConstant;
        static readonly MAX_COMBINED_UNIFORM_BLOCKS: WebGlConstant;
        static readonly MAX_UNIFORM_BUFFER_BINDINGS: WebGlConstant;
        static readonly MAX_UNIFORM_BLOCK_SIZE: WebGlConstant;
        static readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: WebGlConstant;
        static readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: WebGlConstant;
        static readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: WebGlConstant;
        static readonly ACTIVE_UNIFORM_BLOCKS: WebGlConstant;
        static readonly UNIFORM_TYPE: WebGlConstant;
        static readonly UNIFORM_SIZE: WebGlConstant;
        static readonly UNIFORM_BLOCK_INDEX: WebGlConstant;
        static readonly UNIFORM_OFFSET: WebGlConstant;
        static readonly UNIFORM_ARRAY_STRIDE: WebGlConstant;
        static readonly UNIFORM_MATRIX_STRIDE: WebGlConstant;
        static readonly UNIFORM_IS_ROW_MAJOR: WebGlConstant;
        static readonly UNIFORM_BLOCK_BINDING: WebGlConstant;
        static readonly UNIFORM_BLOCK_DATA_SIZE: WebGlConstant;
        static readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: WebGlConstant;
        static readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: WebGlConstant;
        static readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: WebGlConstant;
        static readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: WebGlConstant;
        static readonly OBJECT_TYPE: WebGlConstant;
        static readonly SYNC_CONDITION: WebGlConstant;
        static readonly SYNC_STATUS: WebGlConstant;
        static readonly SYNC_FLAGS: WebGlConstant;
        static readonly SYNC_FENCE: WebGlConstant;
        static readonly SYNC_GPU_COMMANDS_COMPLETE: WebGlConstant;
        static readonly UNSIGNALED: WebGlConstant;
        static readonly SIGNALED: WebGlConstant;
        static readonly ALREADY_SIGNALED: WebGlConstant;
        static readonly TIMEOUT_EXPIRED: WebGlConstant;
        static readonly CONDITION_SATISFIED: WebGlConstant;
        static readonly WAIT_FAILED: WebGlConstant;
        static readonly SYNC_FLUSH_COMMANDS_BIT: WebGlConstant;
        static readonly COLOR: WebGlConstant;
        static readonly DEPTH: WebGlConstant;
        static readonly STENCIL: WebGlConstant;
        static readonly MIN: WebGlConstant;
        static readonly MAX: WebGlConstant;
        static readonly DEPTH_COMPONENT24: WebGlConstant;
        static readonly STREAM_READ: WebGlConstant;
        static readonly STREAM_COPY: WebGlConstant;
        static readonly STATIC_READ: WebGlConstant;
        static readonly STATIC_COPY: WebGlConstant;
        static readonly DYNAMIC_READ: WebGlConstant;
        static readonly DYNAMIC_COPY: WebGlConstant;
        static readonly DEPTH_COMPONENT32F: WebGlConstant;
        static readonly DEPTH32F_STENCIL8: WebGlConstant;
        static readonly INVALID_INDEX: WebGlConstant;
        static readonly TIMEOUT_IGNORED: WebGlConstant;
        static readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: WebGlConstant;
        static readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: WebGlConstant;
        static readonly UNMASKED_VENDOR_WEBGL: WebGlConstant;
        static readonly UNMASKED_RENDERER_WEBGL: WebGlConstant;
        static readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: WebGlConstant;
        static readonly TEXTURE_MAX_ANISOTROPY_EXT: WebGlConstant;
        static readonly COMPRESSED_RGB_S3TC_DXT1_EXT: WebGlConstant;
        static readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: WebGlConstant;
        static readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: WebGlConstant;
        static readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: WebGlConstant;
        static readonly COMPRESSED_R11_EAC: WebGlConstant;
        static readonly COMPRESSED_SIGNED_R11_EAC: WebGlConstant;
        static readonly COMPRESSED_RG11_EAC: WebGlConstant;
        static readonly COMPRESSED_SIGNED_RG11_EAC: WebGlConstant;
        static readonly COMPRESSED_RGB8_ETC2: WebGlConstant;
        static readonly COMPRESSED_RGBA8_ETC2_EAC: WebGlConstant;
        static readonly COMPRESSED_SRGB8_ETC2: WebGlConstant;
        static readonly COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: WebGlConstant;
        static readonly COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: WebGlConstant;
        static readonly COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: WebGlConstant;
        static readonly COMPRESSED_RGB_PVRTC_4BPPV1_IMG: WebGlConstant;
        static readonly COMPRESSED_RGBA_PVRTC_4BPPV1_IMG: WebGlConstant;
        static readonly COMPRESSED_RGB_PVRTC_2BPPV1_IMG: WebGlConstant;
        static readonly COMPRESSED_RGBA_PVRTC_2BPPV1_IMG: WebGlConstant;
        static readonly COMPRESSED_RGB_ETC1_WEBGL: WebGlConstant;
        static readonly COMPRESSED_RGB_ATC_WEBGL: WebGlConstant;
        static readonly COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL: WebGlConstant;
        static readonly COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL: WebGlConstant;
        static readonly UNSIGNED_INT_24_8_WEBGL: WebGlConstant;
        static readonly HALF_FLOAT_OES: WebGlConstant;
        static readonly RGBA32F_EXT: WebGlConstant;
        static readonly RGB32F_EXT: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: WebGlConstant;
        static readonly UNSIGNED_NORMALIZED_EXT: WebGlConstant;
        static readonly MIN_EXT: WebGlConstant;
        static readonly MAX_EXT: WebGlConstant;
        static readonly SRGB_EXT: WebGlConstant;
        static readonly SRGB_ALPHA_EXT: WebGlConstant;
        static readonly SRGB8_ALPHA8_EXT: WebGlConstant;
        static readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: WebGlConstant;
        static readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: WebGlConstant;
        static readonly COLOR_ATTACHMENT0_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT1_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT2_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT3_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT4_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT5_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT6_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT7_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT8_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT9_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT10_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT11_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT12_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT13_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT14_WEBGL: WebGlConstant;
        static readonly COLOR_ATTACHMENT15_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER0_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER1_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER2_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER3_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER4_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER5_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER6_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER7_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER8_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER9_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER10_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER11_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER12_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER13_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER14_WEBGL: WebGlConstant;
        static readonly DRAW_BUFFER15_WEBGL: WebGlConstant;
        static readonly MAX_COLOR_ATTACHMENTS_WEBGL: WebGlConstant;
        static readonly MAX_DRAW_BUFFERS_WEBGL: WebGlConstant;
        static readonly VERTEX_ARRAY_BINDING_OES: WebGlConstant;
        static readonly QUERY_COUNTER_BITS_EXT: WebGlConstant;
        static readonly CURRENT_QUERY_EXT: WebGlConstant;
        static readonly QUERY_RESULT_EXT: WebGlConstant;
        static readonly QUERY_RESULT_AVAILABLE_EXT: WebGlConstant;
        static readonly TIME_ELAPSED_EXT: WebGlConstant;
        static readonly TIMESTAMP_EXT: WebGlConstant;
        static readonly GPU_DISJOINT_EXT: WebGlConstant;
    }
}
declare namespace SPECTOR {
    interface WebGlConstantsByName {
        [name: string]: WebGlConstant;
    }
    const WebGlConstantsByName: WebGlConstantsByName;
}
declare namespace SPECTOR {
    interface WebGlConstantsByValue {
        [value: number]: WebGlConstant;
    }
    const WebGlConstantsByValue: WebGlConstantsByValue;
}
declare namespace SPECTOR.Decorators {
    function command(commandName: string): (target: any) => void;
    function getCommandName(target: any): string;
    function state(stateName: string): (target: any) => void;
    function getStateName(target: any): string;
    function recorder(objectName: string): (target: any) => void;
    function getRecorderName(target: any): string;
    const OBJECTNAMEKEY = "___ObjectName";
    const OBJECTTYPEKEY = "___ObjectType";
    function webGlObject(objectName: string): (target: any) => void;
    function getWebGlObjectName(target: any): string;
    function getWebGlObjectType(target: any): Function;
}
declare namespace SPECTOR {
    interface ITimeSpy {
        onFrameStart: IEvent<ITimeSpy>;
        onFrameEnd: IEvent<ITimeSpy>;
        playNextFrame(): void;
        changeSpeedRatio(ratio: number): void;
        getFps(): number;
    }
    interface ITimeSpyOptions {
        spiedWindow?: {
            [name: string]: Function;
        };
        eventConstructor: EventConstructor;
        timeConstructor: TimeConstructor;
    }
    type TimeSpyConstructor = {
        new (options: ITimeSpyOptions, logger: ILogger): ITimeSpy;
    };
}
declare namespace SPECTOR.Spies {
    class TimeSpy implements ITimeSpy {
        private readonly options;
        private readonly logger;
        private static readonly requestAnimationFrameFunctions;
        private static readonly setTimerFunctions;
        private static readonly setTimerCommonValues;
        private static readonly fpsWindowSize;
        private readonly spiedWindow;
        private readonly time;
        private readonly lastSixtyFramesDuration;
        private lastSixtyFramesCurrentIndex;
        private lastSixtyFramesPreviousStart;
        private lastFrame;
        private speedRatio;
        private willPlayNextFrame;
        readonly onFrameStart: IEvent<ITimeSpy>;
        readonly onFrameEnd: IEvent<ITimeSpy>;
        constructor(options: ITimeSpyOptions, logger: ILogger);
        playNextFrame(): void;
        changeSpeedRatio(ratio: number): void;
        getFps(): number;
        private init();
        private spyRequestAnimationFrame(functionName);
        private spySetTimer(functionName);
        private getCallback(self, callback, skippedCalback?);
    }
}
declare namespace SPECTOR {
    interface ICanvasSpy {
        readonly onContextRequested: IEvent<IContextInformation>;
    }
    interface ICanvasSpyOptions {
        readonly canvas?: HTMLCanvasElement;
        readonly eventConstructor: EventConstructor;
    }
    type CanvasSpyConstructor = {
        new (options: ICanvasSpyOptions, logger: ILogger): ICanvasSpy;
    };
}
declare namespace SPECTOR.Spies {
    class CanvasSpy implements ICanvasSpy {
        private readonly options;
        private readonly logger;
        private readonly canvas;
        private spiedGetContext;
        readonly onContextRequested: IEvent<IContextInformation>;
        constructor(options: ICanvasSpyOptions, logger: ILogger);
        private init();
    }
}
declare namespace SPECTOR {
    interface IContextSpy {
        context: WebGLRenderingContexts;
        version: number;
        spy(): void;
        unSpy(): void;
        startCapture(): void;
        stopCapture(): ICapture;
        isCapturing(): boolean;
        getNextCommandCaptureId(): number;
    }
    interface IContextSpyOptions {
        context: WebGLRenderingContexts;
        version: number;
        recordAlways?: boolean;
        injection: InjectionType;
    }
    type ContextSpyConstructor = {
        new (options: IContextSpyOptions, time: ITime, logger: ILogger): IContextSpy;
    };
}
declare namespace SPECTOR.Spies {
    class ContextSpy implements IContextSpy {
        private readonly options;
        private readonly time;
        private readonly logger;
        private static readonly unSpyableMembers;
        private readonly contextInformation;
        private readonly commandSpies;
        private readonly stateSpy;
        private readonly recorderSpy;
        private readonly webGlObjectSpy;
        private readonly injection;
        private capturing;
        private globalCapturing;
        private commandId;
        private currentCapture;
        private canvasCapture;
        private contextCapture;
        readonly context: WebGLRenderingContexts;
        readonly version: number;
        constructor(options: IContextSpyOptions, time: ITime, logger: ILogger);
        spy(): void;
        unSpy(): void;
        startCapture(): void;
        stopCapture(): ICapture;
        isCapturing(): boolean;
        getNextCommandCaptureId(): number;
        onCommand(commandSpy: ICommandSpy, functionInformation: IFunctionInformation): void;
        private spyContext(bindingContext);
        private initStaticCapture();
        private spyFunction(member, bindingContext);
        private toggleGlobalCapturing(capture);
        private tagWebGlObject(object);
    }
}
declare namespace SPECTOR {
    interface ICommandSpy {
        readonly spiedCommandName: string;
        createCapture(functionInformation: IFunctionInformation, commandCaptureId: number): ICommandCapture;
        spy(): void;
        unSpy(): void;
    }
    type CommandSpyCallback = (command: ICommandSpy, functionInformation: IFunctionInformation) => void;
    interface ICommandSpyOptions extends IStateOptions {
        readonly spiedCommandName: string;
        readonly spiedCommandRunningContext: any;
        readonly callback: CommandSpyCallback;
        readonly commandNamespace: FunctionIndexer;
        readonly stackTraceCtor: StackTraceConstructor;
        readonly defaultCommandCtor: CommandConstructor;
    }
    type CommandSpyConstructor = {
        new (options: ICommandSpyOptions, time: ITime, logger: ILogger): ICommandSpy;
    };
}
declare namespace SPECTOR.Spies {
    class CommandSpy implements ICommandSpy {
        private readonly time;
        private readonly logger;
        private static customCommandsConstructors;
        private readonly stackTrace;
        private readonly spiedCommand;
        private readonly spiedCommandRunningContext;
        private readonly callback;
        private readonly commandOptions;
        private command;
        private overloadedCommand;
        readonly spiedCommandName: string;
        constructor(options: ICommandSpyOptions, time: ITime, logger: ILogger);
        spy(): void;
        unSpy(): void;
        createCapture(functionInformation: IFunctionInformation, commandCaptureId: number): ICommandCapture;
        private initCustomCommands(commandNamespace);
        private initCommand(defaultCommandCtor);
        private getSpy();
    }
}
declare namespace SPECTOR {
    interface ICommand {
        readonly spiedCommandName: string;
        createCapture(functionInformation: IFunctionInformation, commandCaptureId: number): ICommandCapture;
    }
    interface ICommandOptions extends IContextInformation {
        readonly spiedCommandName: string;
    }
    type CommandConstructor = {
        new (options: ICommandOptions, stackTrace: IStackTrace, logger: ILogger): ICommand;
    };
}
declare namespace SPECTOR.Commands {
    abstract class BaseCommand implements ICommand {
        protected readonly options: ICommandOptions;
        protected readonly stackTrace: IStackTrace;
        protected readonly logger: ILogger;
        readonly spiedCommandName: string;
        constructor(options: ICommandOptions, stackTrace: IStackTrace, logger: ILogger);
        createCapture(functionInformation: IFunctionInformation, commandCaptureId: number): ICommandCapture;
        protected transformCapture(commandCapture: ICommandCapture): void;
        protected stringify(args: IArguments, result: any): string;
        protected stringifyArgs(args: IArguments): string[];
        protected stringifyResult(result: any): string;
        protected stringifyValue(value: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class DefaultCommand extends BaseCommand {
        private readonly isDeprecated;
        constructor(options: ICommandOptions, stackTrace: IStackTrace, logger: ILogger);
        transformCapture(commandCapture: ICommandCapture): void;
    }
}
declare namespace SPECTOR.Commands {
    class Clear extends BaseCommand {
        protected stringifyArgs(args: IArguments): string[];
    }
}
declare namespace SPECTOR.Commands {
    class BlitFrameBuffer extends BaseCommand {
        protected stringifyArgs(args: IArguments): string[];
    }
}
declare namespace SPECTOR.Commands {
    class VertexAttribPointer extends BaseCommand {
        protected stringifyArgs(args: IArguments): string[];
    }
}
declare namespace SPECTOR.Commands {
    class GetActiveAttrib extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class GetActiveUniform extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class GetTransformFeedbackVarying extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class GetExtension extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class GetShaderPrecisionFormat extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class GetParameter extends BaseCommand {
        protected stringifyResult(result: any): string;
    }
}
declare namespace SPECTOR.Commands {
    class Viewport extends BaseCommand {
        protected stringifyArgs(args: IArguments): string[];
    }
}
declare namespace SPECTOR {
    type RecordId = {
        readonly version: number;
        readonly id: number;
    };
    interface IRecorder {
        readonly objectName: string;
        registerCallbacks(onFunctionCallbacks: FunctionCallbacks): void;
    }
    interface IRecorderOptions extends IContextInformation {
        readonly objectName: string;
    }
    type RecorderConstructor = {
        new (options: IRecorderOptions, logger: ILogger): IRecorder;
    };
}
declare namespace SPECTOR.Recorders {
    abstract class BaseRecorder implements IRecorder {
        protected options: IRecorderOptions;
        protected readonly createCommandNames: string[];
        protected readonly updateCommandNames: string[];
        protected readonly deleteCommandNames: string[];
        readonly objectName: string;
        protected abstract getCreateCommandNames(): string[];
        protected abstract getUpdateCommandNames(): string[];
        protected abstract getDeleteCommandNames(): string[];
        protected abstract getBoundObject(target: number): object;
        constructor(options: IRecorderOptions, logger: ILogger);
        registerCallbacks(onFunctionCallbacks: FunctionCallbacks): void;
        create(functionInformation: IFunctionInformation): RecordId;
        update(functionInformation: IFunctionInformation): RecordId;
        delete(functionInformation: IFunctionInformation): RecordId;
        protected createWithoutSideEffects(functionInformation: IFunctionInformation): RecordId;
        protected updateWithoutSideEffects(functionInformation: IFunctionInformation): RecordId;
        protected deleteWithoutSideEffects(functionInformation: IFunctionInformation): RecordId;
    }
}
declare namespace SPECTOR {
    interface IRecorderSpy {
        readonly contextInformation: IContextInformation;
        recordCommand(functionInformation: IFunctionInformation): void;
    }
    interface IRecorderSpyOptions {
        readonly contextInformation: IContextInformation;
        readonly recorderNamespace: FunctionIndexer;
    }
    type RecorderSpyConstructor = {
        new (options: IRecorderSpyOptions, logger: ILogger): IRecorderSpy;
    };
}
declare namespace SPECTOR.Spies {
    class RecorderSpy implements IRecorderSpy {
        readonly options: IRecorderSpyOptions;
        private readonly logger;
        private readonly recorderConstructors;
        private readonly recorders;
        private readonly onCommandCallbacks;
        readonly contextInformation: IContextInformation;
        constructor(options: IRecorderSpyOptions, logger: ILogger);
        recordCommand(functionInformation: IFunctionInformation): void;
        private initAvailableRecorders();
        private initRecorders();
    }
}
declare namespace SPECTOR {
    interface IStateSpy {
        readonly contextInformation: IContextInformation;
        startCapture(currentCapture: ICapture): void;
        stopCapture(currentCapture: ICapture): void;
        captureState(commandCapture: ICommandCapture): void;
    }
    interface IStateSpyOptions {
        readonly contextInformation: IContextInformation;
        readonly stateNamespace: FunctionIndexer;
    }
    type StateSpyConstructor = {
        new (options: IStateSpyOptions, logger: ILogger): IStateSpy;
    };
}
declare namespace SPECTOR.Spies {
    class StateSpy implements IStateSpy {
        private readonly options;
        private readonly logger;
        private readonly stateConstructors;
        private readonly stateTrackers;
        private readonly onCommandCapturedCallbacks;
        readonly contextInformation: IContextInformation;
        constructor(options: IStateSpyOptions, logger: ILogger);
        startCapture(currentCapture: ICapture): void;
        stopCapture(currentCapture: ICapture): void;
        captureState(commandCapture: ICommandCapture): void;
        private initAvailableStateTrackers();
        private initStateTrackers();
    }
}
declare namespace SPECTOR {
    interface IWebGlObjectSpy {
        readonly contextInformation: IContextInformation;
        tagWebGlObjects(functionInformation: IFunctionInformation): void;
        tagWebGlObject(object: any): WebGlObjectTag;
    }
    interface IWebGlObjectSpyOptions {
        readonly contextInformation: IContextInformation;
        readonly webGlObjectNamespace: FunctionIndexer;
    }
    type WebGlObjectSpyConstructor = {
        new (options: IWebGlObjectSpyOptions, logger: ILogger): IWebGlObjectSpy;
    };
}
declare namespace SPECTOR.Spies {
    class WebGlObjectSpy implements IWebGlObjectSpy {
        private readonly options;
        private readonly logger;
        private readonly webGlObjectConstructors;
        private readonly webGlObjects;
        readonly contextInformation: IContextInformation;
        constructor(options: IWebGlObjectSpyOptions, logger: ILogger);
        tagWebGlObjects(functionInformation: IFunctionInformation): void;
        tagWebGlObject(object: any): WebGlObjectTag;
        private initAvailableWebglObjects();
        private initWebglObjects();
    }
}
declare module SPECTOR {
    type StateData = {
        [key: string]: any;
    };
    interface IState {
        readonly stateName: string;
        registerCallbacks(callbacks: CommandCapturedCallbacks): void;
        startCapture(): State;
        stopCapture(): State;
        getStateData(): StateData;
        readonly requireStartAndStopStates: boolean;
    }
    interface IStateOptions extends IContextInformation {
        readonly stateName?: string;
    }
    type StateConstructor = {
        new (options: IStateOptions, logger: ILogger): IState;
    };
}
declare namespace SPECTOR.States {
    const drawCommands: string[];
    abstract class BaseState implements IState {
        protected readonly options: IStateOptions;
        protected readonly logger: ILogger;
        private readonly changeCommandsByState;
        private readonly consumeCommands;
        private readonly commandNameToStates;
        private readonly requireInitAndEndState;
        protected readonly context: WebGLRenderingContexts;
        protected readonly contextVersion: number;
        protected readonly extensions: ExtensionList;
        protected readonly toggleCapture: (capture: boolean) => void;
        private capturedCommandsByState;
        protected previousState: State;
        protected currentState: State;
        readonly stateName: string;
        readonly requireStartAndStopStates: boolean;
        protected abstract readFromContext(): void;
        constructor(options: IStateOptions, logger: ILogger);
        startCapture(loadFromContext?: boolean): State;
        stopCapture(): State;
        registerCallbacks(callbacks: CommandCapturedCallbacks): void;
        getStateData(): StateData;
        protected getConsumeCommands(): string[];
        protected getChangeCommandsByState(): {
            [key: string]: string[];
        };
        protected copyCurrentStateToPrevious(): void;
        protected onChangeCommand(command: ICommandCapture): void;
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected onConsumeCommand(command: ICommandCapture): void;
        protected isValidConsumeCommand(command: ICommandCapture): boolean;
        protected analyse(consumeCommand: ICommandCapture): void;
        protected storeCommandIds(): void;
        protected changeCommandCaptureStatus(capture: ICommandCapture, status: CommandCaptureStatus): boolean;
        protected areStatesEquals(a: any, b: any): boolean;
        protected isStateEnable(stateName: string, args: IArguments): boolean;
        private readFromContextNoSideEffects();
        private isStateEnableNoSideEffects(stateName, args);
        private getCommandNameToStates();
    }
}
declare module SPECTOR.States {
    const enum ParameterReturnType {
        Unknown = 0,
        GlInt = 10,
        GlEnum = 20,
        GlUint = 30,
    }
    interface IParameter {
        readonly constant: WebGlConstant;
        readonly returnType?: ParameterReturnType;
        readonly changeCommands?: string[];
    }
    abstract class ParameterState extends BaseState {
        protected parameters: IParameter[][];
        protected getWebgl1Parameters(): IParameter[];
        protected getWebgl2Parameters(): IParameter[];
        protected getChangeCommandsByState(): {
            [key: string]: string[];
        };
        protected readFromContext(): void;
        protected readParameterFromContext(parameter: IParameter): any;
        protected stringifyParameterValue(value: any, parameter: IParameter): any;
    }
}
declare module SPECTOR.States.Information {
    class Capabilities extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getWebgl2Parameters(): IParameter[];
        constructor(options: IStateOptions, logger: ILogger);
    }
}
declare module SPECTOR.States.Information {
    class CompressedTextures extends ParameterState {
        constructor(options: IStateOptions, logger: ILogger);
        protected getWebgl1Parameters(): IParameter[];
        protected stringifyParameterValue(value: any, parameter: IParameter): any;
    }
}
declare module SPECTOR {
    interface IExtensions extends IState {
        getExtensions(): ExtensionList;
    }
    type ExtensionsConstructor = {
        new (options: IStateOptions, logger: ILogger): IExtensions;
    };
}
declare module SPECTOR.States.Information {
    interface IExtensionDefinition {
        readonly name: string;
        readonly description?: string;
    }
    interface IExtension {
        readonly name: string;
        readonly extension: any;
    }
    class Extensions extends BaseState implements IExtensions {
        private readonly extensionDefinition;
        constructor(options: IStateOptions, logger: ILogger);
        protected readFromContext(): void;
        getExtensions(): ExtensionList;
    }
}
declare namespace SPECTOR.States {
    class AlignmentState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getWebgl2Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
    }
}
declare namespace SPECTOR.States {
    class BlendState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class ClearState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class ColorState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
    }
}
declare namespace SPECTOR.States {
    class CoverageState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getWebgl2Parameters(): IParameter[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class CullState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class DepthState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class DrawState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getWebgl2Parameters(): IParameter[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class MipmapHintState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected getConsumeCommands(): string[];
    }
}
declare namespace SPECTOR.States {
    class PolygonOffsetState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class ScissorState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class StencilState extends ParameterState {
        protected getWebgl1Parameters(): IParameter[];
        static stencilOpStates: number[];
        static stencilFuncStates: number[];
        static stencilMaskStates: number[];
        protected isValidChangeCommand(command: ICommandCapture, stateName: string): boolean;
        protected getConsumeCommands(): string[];
        protected isStateEnable(stateName: string, args: IArguments): boolean;
    }
}
declare namespace SPECTOR.States {
    class VisualState extends BaseState {
        static captureBaseSize: number;
        private readonly captureFrameBuffer;
        private readonly workingCanvas;
        private readonly captureCanvas;
        private readonly workingContext2D;
        private readonly captureContext2D;
        constructor(options: IStateOptions, logger: ILogger);
        protected getConsumeCommands(): string[];
        protected readFromContext(): void;
        protected readFrameBufferAttachmentFromContext(gl: WebGLRenderingContext | WebGL2RenderingContext, frameBuffer: WebGLFramebuffer, webglConstant: WebGlConstant, x: number, y: number, width: number, height: number): void;
        protected getCapture(gl: WebGLRenderingContext, name: string, x: number, y: number, width: number, height: number): void;
        protected analyse(consumeCommand: ICommandCapture): void;
        private getTag(object);
    }
}
declare namespace SPECTOR.States {
    class DrawCallState extends BaseState {
        readonly requireStartAndStopStates: boolean;
        protected getConsumeCommands(): string[];
        protected getChangeCommandsByState(): {
            [key: string]: string[];
        };
        protected readFromContext(): void;
        protected readFrameBufferFromContext(): any;
        protected readFrameBufferAttachmentFromContext(attachment: number): any;
        protected readShaderFromContext(shader: WebGLShader): {};
        protected readAttributeFromContext(program: WebGLProgram, activeAttributeIndex: number): {};
        protected readUniformFromContext(program: WebGLProgram, activeUniformIndex: number): {};
        protected readTextureFromContext(textureUnit: number, target: WebGlConstant): {};
        protected readUniformsFromContextIntoState(program: WebGLProgram, uniformIndices: number[], uniformsState: any[]): void;
        protected readTransformFeedbackFromContext(program: WebGLProgram, index: number): {};
        protected readUniformBlockFromContext(program: WebGLProgram, index: number): {};
        private static samplerTypes;
        private getWebGlConstant(value);
        private getTag(object);
    }
}
declare namespace SPECTOR {
    type WebGlObjectTag = {
        readonly typeName: string;
        readonly id: number;
        version: number;
        displayText?: string;
    };
    interface IWebGlObject {
        readonly typeName: string;
        readonly type: Function;
        tagWebGlObject(webGlObject: WebGLObject): WebGlObjectTag;
    }
    interface IWebGlObjectOptions extends IContextInformation {
        readonly typeName: string;
        readonly type: Function;
    }
    type WebGlObjectConstructor = {
        new (options: IWebGlObjectOptions, logger: ILogger): IWebGlObject;
    };
}
declare namespace SPECTOR.WebGlObjects {
    function getWebGlObjectTag(object: WebGLObject): WebGlObjectTag;
    function attachWebGlObjectTag(object: WebGLObject, tag: WebGlObjectTag): void;
    function stringifyWebGlObjectTag(tag: WebGlObjectTag): string;
}
declare namespace SPECTOR.WebGlObjects {
    abstract class BaseWebGlObject implements IWebGlObject {
        protected options: IWebGlObjectOptions;
        private id;
        readonly typeName: string;
        readonly type: Function;
        constructor(options: IWebGlObjectOptions, logger: ILogger);
        tagWebGlObject(webGlObject: any): WebGlObjectTag;
        protected getNextId(): number;
    }
}
declare namespace SPECTOR.WebGlObjects {
    class Buffer extends BaseWebGlObject {
    }
    class FrameBuffer extends BaseWebGlObject {
    }
    class Program extends BaseWebGlObject {
    }
    class Query extends BaseWebGlObject {
    }
    class Renderbuffer extends BaseWebGlObject {
    }
    class Sampler extends BaseWebGlObject {
    }
    class Shader extends BaseWebGlObject {
    }
    class Sync extends BaseWebGlObject {
    }
    class Texture extends BaseWebGlObject {
    }
    class TransformFeedback extends BaseWebGlObject {
    }
    class UniformLocation extends BaseWebGlObject {
    }
    class VertexArrayObject extends BaseWebGlObject {
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    abstract class BaseNoneGenericComponent {
        protected readonly eventConstructor: EventConstructor;
        protected readonly logger: ILogger;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        abstract render(state: any, stateId: number): Element;
        protected createFromHtml(html: string): Element;
        protected htmlTemplate(literalSections: TemplateStringsArray, ...substs: any[]): string;
        private htmlEscape(str);
    }
    interface IStateEventArgs<T> {
        sender: Element;
        stateId: number;
        state: T;
    }
    type IStateEvent<T> = IEvent<IStateEventArgs<T>>;
    abstract class BaseComponent<T> extends BaseNoneGenericComponent {
        private readonly events;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        abstract render(state: T, stateId: number): Element;
        protected renderElementFromTemplate(template: string, state: T, stateId: number): Element;
        protected bindCommands(domNode: Element, state: T, stateId: number): void;
        protected bindCommand(commandContainer: Element, state: T, stateId: number): void;
        protected mapEventListener(domElement: Element, domEvent: string, eventName: string, state: T, stateId: number, commandCapture?: boolean, stopPropagation?: boolean): void;
        protected createEvent(commandName: string): IStateEvent<T>;
        protected triggerEvent(commandName: string, element: Element, state: T, stateId: number): void;
        addEventListener(command: string, callback: (stateEventArgs: IStateEventArgs<T>) => void, context?: any): number;
        removeEventListener(command: string, listenerId: number): void;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class Compositor {
        private readonly logger;
        private readonly placeHolder;
        private readonly stateStore;
        constructor(placeHolder: Element, stateStore: StateStore, logger: ILogger);
        compose(rootStateId: number): void;
        private composeChildren(stateId, container);
        private composeInContainer(parentContainer, indexInContainer, stateId, lastOperation);
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class MVX {
        private readonly logger;
        private static readonly REFRESHRATEINMILLISECONDS;
        private readonly compositor;
        private readonly stateStore;
        private willRender;
        private rootStateId;
        constructor(placeHolder: Element, logger: ILogger);
        addRootState(data: {}, component: BaseNoneGenericComponent): number;
        addChildState(parentId: number, data: {}, component: BaseNoneGenericComponent): number;
        insertChildState(parentId: number, data: {}, index: number, component: BaseNoneGenericComponent): number;
        updateState(id: number, data: {}): void;
        removeState(id: number): void;
        removeChildrenStates(id: number): void;
        getState(id: number): {};
        getGenericState<T>(id: number): T;
        getChildrenState(id: number): any[];
        getChildrenGenericState<T>(id: number): T[];
        hasChildren(id: number): boolean;
        updateAllChildrenState(id: number, updateCallback: (state: any) => any): void;
        updateAllChildrenGenericState<T>(id: number, updateCallback: (state: T) => T): void;
        private setForRender();
        private compose();
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class ComponentInstance {
        private readonly logger;
        private static idGenerator;
        private readonly component;
        private __cachedCurrentChildrenContainer;
        private __cachedCurrentDomNode;
        private domNode;
        constructor(component: BaseNoneGenericComponent, logger: ILogger);
        render(state: {}, stateId: number, lastOperation: LastOperation): void;
        composeInContainer(parentContainer: Element, indexInContainer: number, lastOperation: LastOperation): Element;
        private removeNode();
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    const enum LastOperation {
        Processed = 0,
        Add = 20,
        Update = 40,
        Delete = 50,
    }
    class StateStore {
        private readonly logger;
        private readonly store;
        private pendingOperation;
        private idGenerator;
        constructor(logger: ILogger);
        getLastOperation(id: number): LastOperation;
        getData(id: number): {};
        getComponentInstance(id: number): ComponentInstance;
        getParentId(id: number): number;
        getChildrenIds(id: number): number[];
        hasChildren(id: number): boolean;
        private getNewId();
        add(data: {}, componentInstance: ComponentInstance): number;
        update(id: number, data: {}): void;
        addChild(parentId: number, data: {}, componentInstance: ComponentInstance): number;
        insertChildAt(parentId: number, index: number, data: {}, componentInstance: ComponentInstance): number;
        removeChildById(parentId: number, id: number): void;
        removeChildAt(parentId: number, index: number): void;
        remove(id: number): void;
        removeChildren(id: number): void;
        getStatesToProcess(): {
            [key: number]: number;
        };
        flushPendingOperations(): void;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface ICaptureMenuComponentState {
        readonly visible: boolean;
    }
    class CaptureMenuComponent extends BaseComponent<boolean> {
        render(state: boolean, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CaptureMenuActionsComponent extends BaseComponent<boolean> {
        onCaptureRequested: IStateEvent<boolean>;
        onPlayRequested: IStateEvent<boolean>;
        onPauseRequested: IStateEvent<boolean>;
        onPlayNextFrameRequested: IStateEvent<boolean>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: boolean, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface ICanvasListComponentState {
        currentCanvasInformation: ICanvasInformation;
        showList: boolean;
    }
    class CanvasListComponent extends BaseComponent<ICanvasListComponentState> {
        onCanvasSelection: IStateEvent<ICanvasListComponentState>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: ICanvasListComponentState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CanvasListItemComponent extends BaseComponent<ICanvasInformation> {
        onCanvasSelected: IStateEvent<ICanvasInformation>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: ICanvasInformation, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class FpsCounterComponent extends BaseComponent<number> {
        render(state: number, stateId: number): Element;
    }
}
declare namespace SPECTOR {
    interface ICanvasInformation {
        id: string;
        width: number;
        height: number;
        ref: any;
    }
    interface ICaptureMenu {
        display(): void;
        trackPageCanvases(): void;
        updateCanvasesList(canvases: NodeListOf<HTMLCanvasElement>): void;
        updateCanvasesListInformation(canvasesInformation: ICanvasInformation[]): void;
        getSelectedCanvasInformation(): ICanvasInformation;
        hide(): void;
        setFPS(fps: number): void;
        readonly onCanvasSelected: IEvent<ICanvasInformation>;
        readonly onCaptureRequested: IEvent<ICanvasInformation>;
        readonly onPauseRequested: IEvent<ICanvasInformation>;
        readonly onPlayRequested: IEvent<ICanvasInformation>;
        readonly onPlayNextFrameRequested: IEvent<ICanvasInformation>;
    }
    interface ICaptureMenuOptions {
        readonly eventConstructor: EventConstructor;
        readonly rootPlaceHolder?: Element;
        readonly canvas?: HTMLCanvasElement;
    }
    type CaptureMenuConstructor = {
        new (options: ICaptureMenuOptions, logger: ILogger): ICaptureMenu;
    };
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CaptureMenu implements ICaptureMenu {
        private readonly options;
        private readonly logger;
        private readonly rootPlaceHolder;
        private readonly mvx;
        private readonly captureMenuComponent;
        private readonly canvasListItemComponent;
        private readonly actionsComponent;
        private readonly canvasListComponent;
        private readonly fpsCounterComponent;
        private readonly rootStateId;
        private readonly fpsStateId;
        private readonly actionsStateId;
        private readonly canvasListStateId;
        private visible;
        readonly onCanvasSelected: IEvent<ICanvasInformation>;
        readonly onCaptureRequested: IEvent<ICanvasInformation>;
        readonly onPauseRequested: IEvent<ICanvasInformation>;
        readonly onPlayRequested: IEvent<ICanvasInformation>;
        readonly onPlayNextFrameRequested: IEvent<ICanvasInformation>;
        constructor(options: ICaptureMenuOptions, logger: ILogger);
        getSelectedCanvasInformation(): ICanvasInformation;
        trackPageCanvases(): void;
        updateCanvasesList(canvases: NodeListOf<HTMLCanvasElement>): void;
        updateCanvasesListInformation(canvasesInformation: ICanvasInformation[]): void;
        display(): void;
        hide(): void;
        setFPS(fps: number): void;
        private updateMenuState();
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CaptureListComponent extends BaseComponent<boolean> {
        onCaptureLoaded: IEvent<ICapture>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: boolean, stateId: number): Element;
        private drag(e);
        private drop(eventDrop);
        private loadFiles(event);
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface ICaptureListItemState {
        capture: ICapture;
        active: boolean;
    }
    class CaptureListItemComponent extends BaseComponent<ICaptureListItemState> {
        onCaptureSelected: IStateEvent<ICaptureListItemState>;
        onSaveRequested: IStateEvent<ICaptureListItemState>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: ICaptureListItemState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class VisualStateListComponent extends BaseComponent<any> {
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface IVisualStateItem {
        time: number;
        commandStateId: number;
        VisualState: any;
        active: boolean;
    }
    class VisualStateListItemComponent extends BaseComponent<IVisualStateItem> {
        onVisualStateSelected: IStateEvent<IVisualStateItem>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: IVisualStateItem, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CommandListComponent extends BaseComponent<any> {
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface ICommandListItemState {
        capture: ICommandCapture;
        active: boolean;
        visualStateId: number;
    }
    class CommandListItemComponent extends BaseComponent<ICommandListItemState> {
        onCommandSelected: IStateEvent<ICommandListItemState>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: ICommandListItemState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class CommandDetailComponent extends BaseComponent<any> {
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class JSONContentComponent extends BaseComponent<any> {
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class JSONGroupComponent extends BaseComponent<string> {
        render(state: string, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface IJSONItemState {
        key: string;
        value: string;
    }
    class JSONItemComponent extends BaseComponent<IJSONItemState> {
        render(state: IJSONItemState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class JSONSourceItemComponent extends BaseComponent<IJSONItemState> {
        onOpenSourceClicked: IStateEvent<IJSONItemState>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: IJSONItemState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class JSONVisualStateItemComponent extends BaseComponent<string> {
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    const enum MenuStatus {
        Captures = 0,
        Information = 10,
        InitState = 20,
        EndState = 30,
        Commands = 40,
    }
    interface IResultViewMenuState {
        status: MenuStatus;
        searchText: String;
    }
    class ResultViewMenuComponent extends BaseComponent<IResultViewMenuState> {
        onCapturesClicked: IStateEvent<IResultViewMenuState>;
        onCommandsClicked: IStateEvent<IResultViewMenuState>;
        onInformationClicked: IStateEvent<IResultViewMenuState>;
        onInitStateClicked: IStateEvent<IResultViewMenuState>;
        onEndStateClicked: IStateEvent<IResultViewMenuState>;
        onCloseClicked: IStateEvent<IResultViewMenuState>;
        onSearchTextChanged: IStateEvent<IResultViewMenuState>;
        onSearchTextCleared: IStateEvent<IResultViewMenuState>;
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: IResultViewMenuState, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class ResultViewContentComponent extends BaseComponent<any> {
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: any, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    class ResultViewComponent extends BaseComponent<boolean> {
        constructor(eventConstructor: EventConstructor, logger: ILogger);
        render(state: boolean, stateId: number): Element;
    }
}
declare namespace SPECTOR.EmbeddedFrontend {
    interface ISourceCodeState {
        description: string;
        source: string;
    }
    class SourceCodeComponent extends BaseComponent<ISourceCodeState> {
        render(state: ISourceCodeState, stateId: number): Element;
    }
}
declare namespace SPECTOR {
    interface IResultView {
        display(): void;
        hide(): void;
        addCapture(capture: ICapture): number;
        selectCapture(captureId: number): void;
    }
    interface IResultViewOptions {
        readonly eventConstructor: EventConstructor;
        readonly rootPlaceHolder?: Element;
    }
    type ResultViewConstructor = {
        new (options: IResultViewOptions, logger: ILogger): IResultView;
    };
}
declare namespace SPECTOR.EmbeddedFrontend {
    class ResultView implements IResultView {
        private readonly options;
        private readonly logger;
        private readonly rootPlaceHolder;
        private readonly mvx;
        private readonly captureListComponent;
        private readonly captureListItemComponent;
        private readonly visualStateListComponent;
        private readonly visualStateListItemComponent;
        private readonly commandListComponent;
        private readonly commandListItemComponent;
        private readonly commandDetailComponent;
        private readonly jsonContentComponent;
        private readonly jsonGroupComponent;
        private readonly jsonItemComponent;
        private readonly jsonSourceItemComponent;
        private readonly jsonVisualStateItemComponent;
        private readonly resultViewMenuComponent;
        private readonly resultViewContentComponent;
        private readonly resultViewComponent;
        private readonly sourceCodeComponent;
        private readonly rootStateId;
        private readonly menuStateId;
        private readonly contentStateId;
        private readonly captureListStateId;
        private commandListStateId;
        private commandDetailStateId;
        private visualStateListStateId;
        private currentCaptureStateId;
        private currentCommandStateId;
        private currentVisualStateId;
        private initVisualStateId;
        private searchText;
        private currentCommandId;
        private visible;
        constructor(options: IResultViewOptions, logger: ILogger);
        saveCapture(capture: ICapture): void;
        selectCapture(captureStateId: number): void;
        selectCommand(commandStateId: number): void;
        selectVisualState(visualStateId: number): void;
        display(): void;
        hide(): void;
        addCapture(capture: ICapture): number;
        private initMenuComponent();
        private onCaptureRelatedAction(menuStatus);
        private displayCaptures();
        private displayInformation();
        private displayJSON(parentGroupId, json);
        private getJSONAsString(parentGroupId, key, json);
        private displayJSONGroup(parentGroupId, title, json);
        private displayInitState();
        private displayEndState();
        private displayCurrentCapture();
        private displayCurrentCommand();
        private displayCurrentVisualState();
        private createVisualStates(capture);
        private createCommands(capture);
        private updateViewState();
        private toFilter(text);
        private search(text);
    }
}
declare namespace SPECTOR {
    type InjectionType = {
        readonly WebGlObjectNamespace: FunctionIndexer;
        readonly RecorderNamespace: FunctionIndexer;
        readonly CommandNamespace: FunctionIndexer;
        readonly StateNamespace: FunctionIndexer;
        readonly StackTraceCtor: StackTraceConstructor;
        readonly LoggerCtor: LoggerConstructor;
        readonly EventCtor: EventConstructor;
        readonly TimeCtor: TimeConstructor;
        readonly CanvasSpyCtor: CanvasSpyConstructor;
        readonly CommandSpyCtor: CommandSpyConstructor;
        readonly ContextSpyCtor: ContextSpyConstructor;
        readonly RecorderSpyCtor: RecorderSpyConstructor;
        readonly StateSpyCtor: StateSpyConstructor;
        readonly TimeSpyCtor: TimeSpyConstructor;
        readonly WebGlObjectSpyCtor: WebGlObjectSpyConstructor;
        readonly ExtensionsCtor: ExtensionsConstructor;
        readonly CapabilitiesCtor: StateConstructor;
        readonly CompressedTexturesCtor: StateConstructor;
        readonly DefaultCommandCtor: CommandConstructor;
        readonly CaptureMenuConstructor: CaptureMenuConstructor;
        readonly ResultViewConstructor: ResultViewConstructor;
    };
}
declare namespace SPECTOR.ProvidedInjection {
    const DefaultInjection: InjectionType;
}
declare namespace SPECTOR {
    interface ISpectorOptions {
        readonly injection?: InjectionType;
    }
    interface IAvailableContext {
        readonly canvas: HTMLCanvasElement;
        readonly contextSpy: IContextSpy;
    }
    class Spector {
        private options;
        private static MAXRETRY;
        private readonly logger;
        private readonly timeSpy;
        private readonly contexts;
        private readonly injection;
        private readonly time;
        private canvasSpy;
        private captureNextFrames;
        private capturingContext;
        private captureMenu;
        private resultView;
        private retry;
        readonly onCapture: IEvent<ICapture>;
        constructor(options?: ISpectorOptions);
        displayUI(): void;
        getResultUI(): IResultView;
        getCaptureUI(): ICaptureMenu;
        pause(): void;
        play(): void;
        playNextFrame(): void;
        drawOnlyEveryXFrame(x: number): void;
        getFps(): number;
        spyCanvases(): void;
        spyCanvas(canvas: HTMLCanvasElement): void;
        getAvailableContexts(): IAvailableContext[];
        captureCanvas(canvas: HTMLCanvasElement): void;
        captureContext(context: WebGLRenderingContexts): void;
        captureContextSpy(contextSpy: IContextSpy): void;
        private capture(frameCount?);
        private spyContext(contextInformation);
        private getAvailableContextSpyByCanvas(canvas);
        private onFrameStart();
        private onFrameEnd();
    }
}
