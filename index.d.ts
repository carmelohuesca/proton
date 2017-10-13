declare module 'ProtonModule' {
    interface Init {
        init(): void;
    }
    class Proton implements Init {
        constructor();
        init(): void;
        id: string;
        name: string;
        label: string;
        visible: boolean;
        show(): void;
        hide(): void;
        toggle(): void;
            
        static COMPLETE: string;
        static FOCUS: string;
        static CLICK: string;
        static HOVER: string;
        static EVENTS: any;
        
        fireEvent(event: string): void;
    }
}