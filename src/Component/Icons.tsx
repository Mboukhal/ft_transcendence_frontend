
interface IconProps {
    className?: string;
}
export const SearchIcon = ({ className }: IconProps) => {
    return (<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g clip-path="url(#clip0_227_13)">
            <path d="M13.5526 12.7518L10.2206 9.28631C11.0776 8.26949 11.5473 6.98231 11.5467 5.65249C11.5467 2.53576 9.01093 0 5.89419 0C2.77746 0 0.241699 2.53576 0.241699 5.65249C0.241699 8.76923 2.77746 11.305 5.89419 11.305C7.06426 11.305 8.17928 10.9521 9.13258 10.2821L12.4899 13.7739C12.6302 13.9196 12.819 14 13.0213 14C13.2127 14 13.3943 13.927 13.5322 13.7943C13.6729 13.6586 13.7541 13.4727 13.7579 13.2773C13.7617 13.0818 13.6879 12.8929 13.5526 12.7518ZM5.89419 1.47456C8.19795 1.47456 10.0721 3.34873 10.0721 5.65249C10.0721 7.95625 8.19795 9.83043 5.89419 9.83043C3.59043 9.83043 1.71626 7.95625 1.71626 5.65249C1.71626 3.34873 3.59043 1.47456 5.89419 1.47456Z" />
        </g>
        <defs>
            <clipPath id="clip0_227_13">
                <rect width="14" height="14" />
            </clipPath>
        </defs>
    </svg>
    );
}

export const OnlineIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="3.48242" cy="2.5" r="2.5" fill="#05AE13" />
        </svg>
    );
}

export const PlayIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clip-path="url(#clip0_257_225)">
                <path d="M17.979 11.3459C17.9424 9.76872 17.461 7.66364 16.6907 5.71461C16.3387 4.82145 15.9569 4.05446 15.5883 3.49997C15.0969 2.75622 14.6553 2.4109 14.1905 2.4109C13.9282 2.4109 13.6924 2.40094 13.4667 2.39098C12.8956 2.36774 12.4008 2.34782 11.9725 2.52379C11.5309 2.70641 11.2753 3.0484 11.1192 3.39039H7.84537C7.68931 3.0484 7.43365 2.70641 6.99205 2.52379C6.56041 2.34782 6.069 2.36774 5.49791 2.39098C5.26881 2.40094 5.03306 2.4109 4.77408 2.4109C4.30924 2.4109 3.86764 2.75622 3.37623 3.49997C3.00767 4.05778 2.62916 4.82477 2.27389 5.71793C1.50357 7.66364 1.02213 9.76872 0.985604 11.3492C0.922518 14.1183 2.2274 14.5898 3.01099 14.6263H3.08072C3.86432 14.6263 4.72428 14.0254 5.70377 12.7968C6.16529 12.2191 6.53717 11.6414 6.73971 11.316H12.2249C12.4241 11.6414 12.7993 12.2158 13.2608 12.7968C14.2735 14.0619 15.1534 14.6629 15.9536 14.6263C16.7372 14.5898 18.042 14.115 17.979 11.3459ZM10.6909 4.4529C10.3622 4.98082 9.88404 5.18004 9.48228 5.18004C9.08053 5.18004 8.6024 4.9775 8.27369 4.4529H10.6909ZM16.87 12.3088C16.6907 13.5273 16.1196 13.5539 15.9071 13.5638C15.7577 13.5705 15.1766 13.4875 14.1008 12.1427C13.4667 11.3492 12.9952 10.5291 12.9885 10.5224C12.8922 10.3564 12.7196 10.2535 12.527 10.2535H6.43756C6.2483 10.2535 6.07232 10.3564 5.97603 10.5191C5.97271 10.5257 5.50123 11.3459 4.86373 12.1394C3.78795 13.4841 3.20689 13.5672 3.05748 13.5605C2.84166 13.5506 2.27389 13.524 2.09459 12.3054C1.91197 11.057 2.24732 8.97848 2.97115 6.88336C3.29322 5.957 3.66842 5.09704 4.03033 4.45954C4.48189 3.66598 4.7442 3.49664 4.79732 3.47008C5.06959 3.47008 5.31861 3.46012 5.53775 3.45016C6.59029 3.407 6.77955 3.40036 6.99537 4.15407C7.35728 5.42575 8.33346 6.24254 9.48228 6.24254C10.6311 6.24254 11.6073 5.42243 11.9692 4.15407C12.185 3.40036 12.3743 3.407 13.4268 3.45016C13.646 3.46012 13.895 3.47008 14.1672 3.47008C14.2204 3.49664 14.486 3.66598 14.9342 4.45954C15.2962 5.09704 15.6713 5.957 15.9934 6.88336C16.7172 8.97848 17.0526 11.057 16.87 12.3088ZM7.28424 7.6404C7.28424 7.93258 7.04517 8.17165 6.75299 8.17165H6.08228V8.84235C6.08228 9.13454 5.84322 9.3736 5.55103 9.3736C5.25885 9.3736 5.01978 9.13454 5.01978 8.84235V8.17165H4.34908C4.05689 8.17165 3.81783 7.93258 3.81783 7.6404C3.81783 7.34821 4.05689 7.10915 4.34908 7.10915H5.01978V6.43844C5.01978 6.14625 5.25885 5.90719 5.55103 5.90719C5.84322 5.90719 6.08228 6.14625 6.08228 6.43844V7.10915H6.75299C7.04849 7.10915 7.28424 7.34489 7.28424 7.6404ZM13.9448 6.43512V6.56793C13.9448 6.86012 13.7057 7.09918 13.4135 7.09918C13.1213 7.09918 12.8823 6.86012 12.8823 6.56793V6.43512C12.8823 6.14293 13.1213 5.90387 13.4135 5.90387C13.7057 5.90387 13.9448 6.14293 13.9448 6.43512ZM13.9448 8.71286V8.84235C13.9448 9.13454 13.7057 9.3736 13.4135 9.3736C13.1213 9.3736 12.8823 9.13454 12.8823 8.84235V8.71286C12.8823 8.42067 13.1213 8.18161 13.4135 8.18161C13.7057 8.18161 13.9448 8.41735 13.9448 8.71286ZM15.1467 7.6404C15.1467 7.93258 14.9077 8.17165 14.6155 8.17165H14.4827C14.1905 8.17165 13.9514 7.93258 13.9514 7.6404C13.9514 7.34821 14.1905 7.10915 14.4827 7.10915H14.6155C14.911 7.10915 15.1467 7.34489 15.1467 7.6404ZM12.8723 7.6404C12.8723 7.93258 12.6333 8.17165 12.3411 8.17165H12.2116C11.9194 8.17165 11.6803 7.93258 11.6803 7.6404C11.6803 7.34821 11.9194 7.10915 12.2116 7.10915H12.3411C12.6333 7.10915 12.8723 7.34489 12.8723 7.6404Z" fill="#2E8CE5" />
            </g>
            <defs>
                <clipPath id="clip0_257_225">
                    <rect width="17" height="17" fill="white" transform="translate(0.982422)" />
                </clipPath>
            </defs>
        </svg>);
}

export const BlockIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M7.63736 0.647482C6.73771 0.644652 5.86067 0.929208 5.13404 1.45968C4.40742 1.99015 3.86919 2.73882 3.59781 3.59657C3.32642 4.45432 3.33606 5.37632 3.62531 6.22821C3.91456 7.0801 4.46832 7.81735 5.20587 8.33252C3.93337 8.84223 2.84241 9.72089 2.07325 10.8555C1.3041 11.9902 0.891895 13.329 0.889648 14.6998C0.889648 14.8769 0.959997 15.0467 1.08522 15.1719C1.21044 15.2971 1.38028 15.3675 1.55736 15.3675C1.73445 15.3675 1.90429 15.2971 2.02951 15.1719C2.15473 15.0467 2.22508 14.8769 2.22508 14.6998C2.22313 13.7153 2.48461 12.7482 2.98239 11.8988C3.48017 11.0494 4.19613 10.3486 5.05601 9.86922C5.91589 9.3898 6.88838 9.14915 7.87261 9.17224C8.85684 9.19534 9.81698 9.48133 10.6534 10.0006C10.7282 10.0504 10.8123 10.0848 10.9006 10.1015C10.989 10.1182 11.0798 10.117 11.1677 10.0979C11.2555 10.0788 11.3386 10.0423 11.4121 9.99037C11.4855 9.93849 11.5478 9.87236 11.5951 9.79593C11.6425 9.71949 11.6739 9.63431 11.6877 9.54545C11.7014 9.4566 11.6972 9.36588 11.6751 9.27871C11.6531 9.19154 11.6138 9.10969 11.5594 9.03804C11.5051 8.96639 11.4369 8.90641 11.3589 8.86166C10.9725 8.62875 10.564 8.43463 10.1394 8.28213C11.1876 7.51362 11.873 6.27646 11.873 4.88055C11.873 2.55488 9.96555 0.647482 7.63736 0.647482ZM7.63736 1.98291C9.24492 1.98291 10.535 3.27551 10.535 4.88055C10.535 6.48559 9.24492 7.77567 7.63736 7.77567C6.03233 7.77567 4.74477 6.49063 4.74477 4.88055C4.74477 3.27047 6.02981 1.98291 7.63736 1.98291ZM11.0591 10.6506C10.9264 10.651 10.7968 10.6909 10.6869 10.7652C10.5769 10.8396 10.4917 10.945 10.4419 11.068C10.3922 11.191 10.3802 11.3261 10.4076 11.456C10.4349 11.5858 10.5003 11.7046 10.5955 11.7971L11.7898 12.9914L10.5955 14.1857C10.5268 14.2459 10.4711 14.3194 10.432 14.4019C10.3928 14.4843 10.371 14.5739 10.3678 14.6651C10.3647 14.7564 10.3803 14.8473 10.4136 14.9322C10.447 15.0172 10.4974 15.0944 10.5618 15.1591C10.6261 15.2239 10.7031 15.2747 10.7879 15.3085C10.8727 15.3423 10.9635 15.3584 11.0547 15.3557C11.1459 15.353 11.2357 15.3317 11.3183 15.293C11.401 15.2543 11.4748 15.199 11.5353 15.1306L12.7322 13.9338L13.9265 15.1306C14.0518 15.2563 14.2219 15.327 14.3993 15.3272C14.5767 15.3274 14.747 15.2572 14.8726 15.1319C14.9983 15.0066 15.069 14.8365 15.0692 14.6591C15.0695 14.4816 14.9992 14.3114 14.8739 14.1857L13.677 12.9914L14.8739 11.7971C14.9707 11.7031 15.0368 11.582 15.0635 11.4497C15.0901 11.3174 15.076 11.1802 15.0231 11.056C14.9702 10.9319 14.8809 10.8267 14.767 10.7544C14.6531 10.682 14.5199 10.6458 14.3851 10.6506C14.2119 10.6558 14.0474 10.728 13.9265 10.8522L12.7322 12.0491L11.5353 10.8522C11.4733 10.7886 11.3993 10.7381 11.3175 10.7034C11.2357 10.6688 11.1479 10.6509 11.0591 10.6506Z" fill="#2E8CE5" />
        </svg>
    );
}

export const SendIcon = ({ className }: IconProps) => {
    return (
        <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <circle cx="15.4824" cy="14.5" r="14.5" fill="#2E8CE5" />
            <g clip-path="url(#clip0_257_242)">
                <path d="M10.3834 20.7395C10.2756 21.2226 10.6558 21.4271 11.0086 21.2728L22.9328 15.3084H22.934C23.0763 15.2302 23.1589 15.0892 23.1589 14.9265C23.1589 14.7637 23.0763 14.6226 22.934 14.5444H22.9328L11.0086 8.5799C10.6558 8.42557 10.2756 8.63014 10.3834 9.11326C10.3907 9.14599 11.0956 12.2091 11.4789 13.8751L17.7035 14.9265L11.4789 15.9777C11.0956 17.6436 10.3906 20.7068 10.3834 20.7395Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_257_242">
                    <rect width="16.2059" height="16.2059" fill="white" transform="translate(10.3647 8.5293)" />
                </clipPath>
            </defs>
        </svg>

    );
}

export const LoginIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M16.6551 24.4518H16.5004C11.2148 24.4518 8.66723 22.3685 8.22676 17.702C8.17915 17.2139 8.53628 16.7734 9.03627 16.7258C9.52435 16.6782 9.96482 17.0472 10.0124 17.5353C10.3577 21.2733 12.1195 22.6661 16.5123 22.6661H16.667C21.5122 22.6661 23.2264 20.9519 23.2264 16.1068V8.34504C23.2264 3.49992 21.5122 1.78567 16.667 1.78567H16.5123C12.0957 1.78567 10.3339 3.2023 10.0124 7.01174C9.95291 7.49982 9.54816 7.86886 9.03627 7.82124C8.53628 7.78553 8.17915 7.34506 8.21486 6.85698C8.61961 2.119 11.1791 0 16.5004 0H16.6551C22.5002 0 25.0002 2.49994 25.0002 8.34504V16.1068C25.0002 21.9519 22.5002 24.4518 16.6551 24.4518Z" fill="white" />
            <path d="M16.2258 13.1187H0.892836C0.404752 13.1187 0 12.7139 0 12.2258C0 11.7378 0.404752 11.333 0.892836 11.333H16.2258C16.7139 11.333 17.1186 11.7378 17.1186 12.2258C17.1186 12.7139 16.7258 13.1187 16.2258 13.1187Z" fill="white" />
            <path d="M13.5705 17.1073C13.3443 17.1073 13.1182 17.024 12.9396 16.8454C12.5944 16.5002 12.5944 15.9288 12.9396 15.5836L16.2966 12.2265L12.9396 8.86943C12.5944 8.5242 12.5944 7.95279 12.9396 7.60756C13.2848 7.26233 13.8562 7.26233 14.2015 7.60756L18.1895 11.5956C18.5347 11.9408 18.5347 12.5122 18.1895 12.8574L14.2015 16.8454C14.0229 17.024 13.7967 17.1073 13.5705 17.1073Z" fill="white" />
        </svg>

    );
}

export const ArrowIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3.99999 5C3.67695 5 3.3539 4.84298 3.10931 4.53475L0.100375 0.742952C-0.0334584 0.574297 -0.0334584 0.295145 0.100375 0.126491C0.234209 -0.0421636 0.455726 -0.0421636 0.58956 0.126491L3.59849 3.91829C3.82001 4.19744 4.17998 4.19744 4.40149 3.91829L7.41044 0.126491C7.54427 -0.0421636 7.76579 -0.0421636 7.89962 0.126491C8.03346 0.295145 8.03346 0.574297 7.89962 0.742952L4.89068 4.53475C4.64609 4.84298 4.32304 5 3.99999 5Z" fill="#2A7ECF" />
        </svg>


    );
}

export const NavPlayIcon = ({ className }: IconProps) => {
    return (
        <svg  viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.5872 19.2637L8.55469 24.3254M8.60419 19.3135L13.6367 24.3752" stroke="white" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M20.1211 21.8192H20.1376M26.6221 21.8192H26.6386M23.3716 25.1051V25.0719M23.3716 18.5664V18.5332" stroke="white" stroke-width="2.1" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M19.2642 1.9043L19.2477 3.58047C19.2433 4.01773 19.0676 4.4356 18.7586 4.74325C18.4496 5.0509 18.0324 5.22347 17.5977 5.22345H17.5482C16.6407 5.22345 15.9147 5.97025 15.9147 6.88302C15.9147 7.79579 16.6572 8.54259 17.5647 8.54259H19.2147M12.6477 35.0958H22.5477C30.7977 35.0958 34.0977 31.7766 34.0977 23.4788V20.1596C34.0977 11.8617 30.7977 8.54259 22.5477 8.54259H12.6477C4.39766 8.54259 1.09766 11.8617 1.09766 20.1596V23.4788C1.09766 31.7766 4.39766 35.0958 12.6477 35.0958Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        

    );
}

export const NavHomeIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M17.5 26.8265V22.1525M12.583 3.22298L3.6895 9.76653C2.2045 10.8571 1 13.1785 1 14.939V26.4837C1 30.0983 4.1185 33.0584 7.9465 33.0584H27.0535C30.8815 33.0584 34 30.0983 34 26.4993V15.1572C34 13.272 32.6635 10.8571 31.03 9.78211L20.833 3.03602C18.523 1.5092 14.8105 1.5871 12.583 3.22298Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


    );
}

export const NavChatIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M21.5873 20.017L22.0748 23.967C22.1998 25.0045 21.0873 25.7295 20.1998 25.192L14.9623 22.0795C14.3873 22.0795 13.8248 22.042 13.2748 21.967C14.2223 20.8686 14.7455 19.4675 14.7498 18.017C14.7498 14.467 11.6748 11.592 7.8748 11.592C6.4248 11.592 5.0873 12.0045 3.9748 12.7295C3.9373 12.417 3.9248 12.1045 3.9248 11.7795C3.9248 6.09199 8.8623 1.47949 14.9623 1.47949C21.0623 1.47949 25.9998 6.09199 25.9998 11.7795C25.9998 15.1545 24.2623 18.142 21.5873 20.017Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.75 18.0168C14.75 19.5043 14.2 20.8793 13.275 21.9668C12.0375 23.4668 10.075 24.4293 7.875 24.4293L4.6125 26.3668C4.0625 26.7043 3.3625 26.2418 3.4375 25.6043L3.75 23.1418C2.075 21.9793 1 20.1168 1 18.0168C1 15.8168 2.175 13.8793 3.975 12.7293C5.0875 12.0043 6.425 11.5918 7.875 11.5918C11.675 11.5918 14.75 14.4668 14.75 18.0168Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}


export const NavCreatRoomIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 36 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M25.7953 4.25637C29.1297 4.25637 31.8109 6.88679 31.8109 10.1204C31.8109 13.1387 29.4685 15.6243 26.4657 15.9519C26.1693 15.9843 25.8681 15.9509 25.5719 15.9844V15.9844M26.3711 26.3708H34.6211M30.4961 30.3919V22.3498M13.3344 15.7666C13.1625 15.7498 12.9562 15.7498 12.7672 15.7666C10.7944 15.7013 8.92517 14.8901 7.5553 13.5047C6.18544 12.1193 5.42252 10.2686 5.42813 8.34442C5.42813 4.23961 8.83125 0.905507 13.0594 0.905507C15.081 0.869959 17.0344 1.61872 18.4897 2.98708C19.945 4.35544 20.7831 6.23131 20.8195 8.20201C20.856 10.1727 20.0879 12.0768 18.6841 13.4954C17.2804 14.9141 15.356 15.731 13.3344 15.7666ZM4.74063 21.9489C0.58125 24.6631 0.58125 29.0862 4.74063 31.7837C9.46719 34.8665 17.2188 34.8665 21.9453 31.7837C26.1047 29.0695 26.1047 24.6464 21.9453 21.9489C17.2359 18.8829 9.48438 18.8829 4.74063 21.9489Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
}
export const NavProfileIcon = ({ className }: IconProps) => {
    return (
        <svg  viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M13.6069 15.7659C13.4237 15.7492 13.2037 15.7492 13.0021 15.7659C8.63986 15.6319 5.17578 12.3647 5.17578 8.3435C5.17578 4.23853 8.80481 0.904297 13.3137 0.904297C17.8042 0.904297 21.4515 4.23853 21.4515 8.3435C21.4332 12.3647 17.9691 15.6319 13.6069 15.7659Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4.4438 21.9481C0.00831648 24.6624 0.00831648 29.0857 4.4438 31.7832C9.48412 34.8661 17.7503 34.8661 22.7906 31.7832C27.2261 29.0689 27.2261 24.6456 22.7906 21.9481C17.7686 18.8819 9.50245 18.8819 4.4438 21.9481Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    );
}


export const TopScoreIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M29.7935 4.71199C29.5499 4.43199 29.3167 4.40319 29.2871 4.40039H10.7135C10.6839 4.40319 10.4507 4.43239 10.2071 4.71199C9.86268 5.10759 9.48388 6.00479 9.63868 8.03199C9.76788 9.72999 10.2551 11.922 11.0863 14.5472C11.2131 14.9472 11.3451 15.338 11.4791 15.7096C12.7739 19.3096 14.5163 22.0392 16.6579 23.8232C17.1316 24.2206 17.6403 24.5741 18.1779 24.8796L18.2031 24.894C19.0467 25.3652 19.6987 25.5504 19.9995 25.6172C20.3007 25.5504 20.9535 25.3648 21.7995 24.892L21.8215 24.8796C22.3589 24.5737 22.8676 24.22 23.3415 23.8228C25.4843 22.0404 27.2267 19.3104 28.5203 15.7104C28.6587 15.3255 28.7896 14.9379 28.9131 14.548C29.7455 11.9228 30.2323 9.73119 30.3603 8.03279C30.5167 6.00479 30.1379 5.10759 29.7935 4.71199ZM24.2139 11.032L22.1371 13.0564C22.1339 13.0594 22.1316 13.0632 22.1302 13.0674C22.1289 13.0716 22.1286 13.0761 22.1295 13.0804L22.6195 15.9388C22.6204 15.9439 22.6199 15.9491 22.618 15.9539C22.6161 15.9587 22.6128 15.9629 22.6086 15.9659C22.6044 15.9689 22.5995 15.9707 22.5943 15.971C22.5891 15.9713 22.584 15.9701 22.5795 15.9676L20.0127 14.618C20.0087 14.616 20.0043 14.615 19.9999 14.615C19.9954 14.615 19.9911 14.616 19.9871 14.618L17.4203 15.9676C17.4158 15.9701 17.4106 15.9713 17.4055 15.971C17.4003 15.9707 17.3953 15.9689 17.3911 15.9659C17.3869 15.9629 17.3837 15.9587 17.3817 15.9539C17.3798 15.9491 17.3793 15.9439 17.3803 15.9388L17.8711 13.0804C17.8719 13.0761 17.8717 13.0716 17.8703 13.0674C17.869 13.0632 17.8666 13.0594 17.8635 13.0564L15.7867 11.0324C15.7831 11.0288 15.7805 11.0243 15.7793 11.0193C15.7782 11.0144 15.7784 11.0092 15.7799 11.0043C15.7815 10.9995 15.7844 10.9952 15.7883 10.9919C15.7921 10.9886 15.7968 10.9864 15.8019 10.9856L18.6719 10.5688C18.6762 10.5682 18.6803 10.5665 18.6839 10.5639C18.6875 10.5613 18.6903 10.5579 18.6923 10.554L19.9759 7.95399C19.9781 7.94943 19.9816 7.9456 19.9859 7.94292C19.9902 7.94023 19.9952 7.93881 20.0003 7.93881C20.0054 7.93881 20.0103 7.94023 20.0146 7.94292C20.019 7.9456 20.0224 7.94943 20.0247 7.95399L21.3083 10.554C21.3102 10.5579 21.3131 10.5613 21.3167 10.5639C21.3202 10.5665 21.3243 10.5682 21.3287 10.5688L24.2003 10.9856C24.2052 10.9866 24.2097 10.989 24.2134 10.9924C24.2171 10.9958 24.2197 11.0001 24.2211 11.0049C24.2225 11.0097 24.2226 11.0148 24.2213 11.0197C24.22 11.0245 24.2175 11.0289 24.2139 11.0324V11.032Z" fill="#2E8CE5" />
            <path d="M12.0053 16.8463C8.11211 16.8463 4.94531 13.6791 4.94531 9.78668V8.10388C4.94531 7.82805 5.05488 7.56352 5.24992 7.36849C5.44496 7.17345 5.70949 7.06388 5.98531 7.06388H10.1625C10.4242 7.0651 10.6758 7.16438 10.8679 7.34211C11.0599 7.51984 11.1783 7.7631 11.1997 8.02388C11.2121 8.18426 11.1856 8.34528 11.1225 8.49325C11.0594 8.64122 10.9615 8.77178 10.8372 8.87385C10.7129 8.97593 10.5658 9.0465 10.4083 9.07958C10.2509 9.11266 10.0878 9.10727 9.93291 9.06388H6.94531V9.78708C6.94531 12.4883 9.07331 14.7019 11.7413 14.8399C11.9881 14.7617 12.2555 14.7822 12.4875 14.8972C12.7194 15.0121 12.8977 15.2126 12.9849 15.4563C13.0411 15.6133 13.0587 15.7815 13.0362 15.9467C13.0138 16.1119 12.9519 16.2694 12.8559 16.4057C12.7599 16.542 12.6325 16.6532 12.4844 16.73C12.3364 16.8067 12.1721 16.8467 12.0053 16.8467V16.8463ZM27.9949 16.8463C27.8282 16.8463 27.6638 16.8063 27.5158 16.7296C27.3678 16.6528 27.2404 16.5416 27.1443 16.4053C27.0483 16.269 26.9864 16.1115 26.964 15.9463C26.9415 15.7811 26.9591 15.6129 27.0153 15.4559C27.1028 15.2124 27.2812 15.0122 27.5131 14.8975C27.745 14.7828 28.0123 14.7624 28.2589 14.8407C29.5529 14.7715 30.7712 14.2092 31.6633 13.2692C32.5554 12.3293 33.0534 11.0833 33.0549 9.78748V9.06348H30.0673C29.9124 9.1068 29.7494 9.11212 29.592 9.07901C29.4346 9.04589 29.2876 8.97531 29.1633 8.87324C29.039 8.77118 28.9412 8.64064 28.8781 8.49271C28.815 8.34478 28.7885 8.18382 28.8009 8.02348C28.8222 7.76274 28.9406 7.51948 29.1325 7.34174C29.3245 7.164 29.5761 7.06471 29.8377 7.06348H34.0149C34.2907 7.06348 34.5553 7.17305 34.7503 7.36809C34.9453 7.56312 35.0549 7.82765 35.0549 8.10348V9.78588C35.0549 13.6807 31.8877 16.8463 27.9949 16.8463ZM24.3841 30.0575H15.6161C16.3477 29.5993 16.9703 28.9869 17.4407 28.2632C17.9111 27.5394 18.2177 26.7217 18.3393 25.8671C19.0881 26.2271 19.6557 26.3675 19.9221 26.4199C19.9415 26.4235 19.9612 26.4259 19.9809 26.4271H20.0001C20.0285 26.4271 20.0568 26.424 20.0845 26.4179C20.3541 26.3643 20.9177 26.2211 21.6593 25.8663C21.7809 26.7211 22.0878 27.5391 22.5584 28.2631C23.0291 28.987 23.6522 29.5994 24.3841 30.0575ZM31.2377 32.9095V35.6007H8.76251V32.9095C8.76315 32.3654 8.9796 31.8438 9.36437 31.4591C9.74915 31.0744 10.2708 30.858 10.8149 30.8575H29.1853C29.7294 30.858 30.2511 31.0744 30.6359 31.4591C31.0206 31.8438 31.2371 32.3654 31.2377 32.9095Z" fill="#2E8CE5" />
        </svg>
    );
}



export const AuthenIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M2.40015 4.99955V3.99966C2.40015 2.34485 2.75015 1 4.50015 1C6.25015 1 6.60015 2.34485 6.60015 3.99966V4.99955" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.25 11.0003H2.75C1.35 11.0003 1 10.5004 1 8.50059V7.5007C1 5.50092 1.35 5.00098 2.75 5.00098H6.25C7.65 5.00098 8 5.50092 8 7.5007V8.50059C8 10.5004 7.65 11.0003 6.25 11.0003Z" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.89868 8H5.90308" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4.49829 8H4.50274" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.0979 8H3.10234" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export const LogOutIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 9 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M3.35791 3.66281C3.47212 1.77206 4.15369 1 5.6458 1H5.69369C7.34053 1 8.00001 1.94013 8.00001 4.28781V7.71219C8.00001 10.0599 7.34053 11 5.69369 11H5.6458C4.16474 11 3.48317 10.2384 3.36159 8.3792" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.60523 5.99512H1.4126" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.23421 4.23535L1 5.9948L2.23421 7.75426" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}
export const ChatIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M32.3683 22.7487C30.5805 25.4662 28.953 28.5285 29.3492 31.7572V31.7572C29.5142 33.1345 28.0456 34.0969 26.8741 33.3834L20.2113 29.4014C20.0471 29.3033 19.8547 29.2522 19.6635 29.2489V29.2489C18.8255 29.2344 18.4302 28.2386 18.8085 27.4907C19.3737 26.3731 19.6762 25.13 19.68 23.8584C19.68 19.1456 15.6209 15.329 10.6047 15.329C9.14806 15.329 7.77738 15.6461 6.55818 16.222C6.0326 16.4702 5.39062 16.1591 5.39062 15.5779V15.5779C5.39062 8.02754 11.9083 1.9043 19.9605 1.9043C28.0126 1.9043 34.5303 8.02754 34.5303 15.5779C34.5303 18.2109 33.7382 20.6663 32.3683 22.7487Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.6817 23.8595C19.6817 25.8342 18.9556 27.6595 17.7346 29.1032C17.0907 29.8882 16.298 30.5623 15.396 31.091C12.5637 32.7509 9.11828 33.2611 6.29986 34.9444V34.9444C5.57384 35.3924 4.64982 34.7784 4.74882 33.9321V33.9321C5.00248 31.922 3.98553 30.0132 2.87236 28.3203C2.02061 27.025 1.53125 25.4966 1.53125 23.8595C1.53125 20.9389 3.08229 18.3668 5.45834 16.8401C6.92687 15.8777 8.69241 15.3301 10.6065 15.3301C15.6226 15.3301 19.6817 19.1467 19.6817 23.8595Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    );
}
export const LogoIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 93 83" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<circle cx="67.5" cy="25.5" r="25.5" fill="#2A7FCF"/>
<rect y="56.0967" width="21" height="6" rx="3.42" transform="rotate(-36.1145 0 56.0967)" fill="#2A7FCF"/>
<rect x="10.2588" y="64.502" width="39" height="6." rx="3.42" transform="rotate(-37.498 10.2588 64.502)" fill="#2A7FCF"/>
<rect x="26.7544" y="67.916" width="28" height="6" rx="3.42" transform="rotate(-36.1145 26.7544 67.916)" fill="#2A7FCF"/>
<rect x="14.6553" y="77.0928" width="9" height="6" rx="3.42" transform="rotate(-36.1145 14.6553 77.0928)" fill="#2A7FCF"/>
<rect x="19.9531" y="41.4414" width="21" height="6" rx="3.42" transform="rotate(-36.1145 19.9531 41.4414)" fill="#2A7FCF"/>
</svg>
    );
}

export const AddIcon = ({ className }: IconProps) => {
    return (
        <svg viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<g clip-path="url(#clip0_507_690)">
<path d="M9.76462 12.302C6.45085 12.302 3.75391 9.54288 3.75391 6.15054C3.75391 2.7582 6.45085 0 9.76462 0C13.0784 0 15.7753 2.75916 15.7753 6.1515C15.7753 9.54384 13.0793 12.302 9.76462 12.302ZM9.76462 1.60503C7.31515 1.60503 5.3222 3.64466 5.3222 6.1515C5.3222 8.65834 7.31515 10.698 9.76462 10.698C12.2141 10.698 14.207 8.65834 14.207 6.1515C14.207 3.64466 12.2141 1.60503 9.76462 1.60503Z" fill="#2E8CE5"/>
<path d="M0.78368 22.9992C0.350594 22.9992 0 22.6404 0 22.1971C0 17.6257 4.37961 13.9062 9.76319 13.9062C10.8178 13.9062 11.8583 14.0492 12.8567 14.3313C13.2738 14.4493 13.5194 14.8906 13.4041 15.3184C13.2888 15.7454 12.8576 15.9967 12.4395 15.8787C11.5771 15.635 10.6762 15.5122 9.76319 15.5122C5.24484 15.5122 1.5683 18.5112 1.5683 22.1981C1.5683 22.6404 1.21677 22.9992 0.78368 22.9992Z" fill="#2E8CE5"/>
<path d="M16.0358 22.9995C14.8097 22.9995 13.637 22.5362 12.7342 21.6948C12.3574 21.359 12.0396 20.9695 11.7893 20.5359C11.3187 19.753 11.0703 18.8474 11.0703 17.9177C11.0703 16.5852 11.569 15.3265 12.4736 14.3738C13.4167 13.3828 14.6812 12.8359 16.0358 12.8359C17.4569 12.8359 18.8012 13.4528 19.7255 14.5273C20.5476 15.4627 21.0004 16.6658 21.0004 17.9168C21.0004 18.3216 20.9507 18.7207 20.8523 19.1035C20.7398 19.6062 20.5429 20.1013 20.2804 20.5368C19.3955 22.0565 17.7691 22.9995 16.0358 22.9995ZM16.0358 14.4419C15.1087 14.4419 14.2425 14.8151 13.5976 15.4934C12.9789 16.1439 12.6386 17.0054 12.6386 17.9187C12.6386 18.5538 12.8083 19.1697 13.1279 19.7012C13.1308 19.706 13.1336 19.7108 13.1364 19.7156C13.3004 20.0005 13.5188 20.2682 13.7682 20.4898C13.7738 20.4946 13.7785 20.4994 13.7841 20.5042C14.3981 21.0789 15.1978 21.3955 16.0358 21.3955C17.2394 21.3955 18.324 20.7661 18.9371 19.7127C18.939 19.7089 18.9418 19.705 18.9437 19.7012C19.1199 19.4096 19.2521 19.0767 19.3261 18.738C19.328 18.7274 19.3308 18.7179 19.3336 18.7073C19.3993 18.455 19.433 18.1902 19.433 17.9187C19.433 17.0639 19.1227 16.2398 18.5584 15.5999C18.5556 15.597 18.5537 15.5951 18.5518 15.5922C17.9238 14.8602 17.007 14.4419 16.0358 14.4419Z" fill="#2E8CE5"/>
<path d="M17.594 18.6998H14.479C14.0459 18.6998 13.6953 18.341 13.6953 17.8977C13.6953 17.4545 14.0459 17.0957 14.479 17.0957H17.594C18.0271 17.0957 18.3777 17.4545 18.3777 17.8977C18.3777 18.341 18.0271 18.6998 17.594 18.6998Z" fill="#2E8CE5"/>
<path d="M16.0337 20.3358C15.6006 20.3358 15.25 19.977 15.25 19.5338V16.3352C15.25 15.892 15.6006 15.5332 16.0337 15.5332C16.4668 15.5332 16.8174 15.892 16.8174 16.3352V19.5338C16.8174 19.977 16.4658 20.3358 16.0337 20.3358Z" fill="#2E8CE5"/>
</g>
<defs>
<clipPath id="clip0_507_690">
<rect fill="white" className={className}/>
</clipPath>
</defs>
</svg>
    );
}


export const NotificationIcon = ({ className }: IconProps) => { 
    return (
<svg viewBox="0 0 25 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M12.5355 2.30469C7.78991 2.30469 3.93328 5.91446 3.93328 10.3562V14.2344C3.93328 15.0529 3.56052 16.3009 3.11608 16.9987L1.46734 19.5618C0.449415 21.1453 1.15192 22.9032 3.01572 23.4936C9.19493 25.426 15.8616 25.426 22.0408 23.4936C23.7756 22.9569 24.5355 21.0379 23.5892 19.5618L21.9405 16.9987C21.5104 16.3009 21.1376 15.0529 21.1376 14.2344V10.3562C21.1376 5.92788 17.2666 2.30469 12.5355 2.30469Z" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round"/>
<path d="M15.1875 2.69082C14.743 2.57005 14.2842 2.47611 13.8111 2.42244C12.4348 2.26141 11.1158 2.35534 9.88281 2.69082C10.2986 1.6978 11.3308 1 12.5351 1C13.7394 1 14.7717 1.6978 15.1875 2.69082Z" stroke="white" stroke-width="1.8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.8365 23.9727C16.8365 26.1868 14.901 27.9984 12.5354 27.9984C11.3598 27.9984 10.2702 27.5422 9.49602 26.8175C8.72183 26.0929 8.23438 25.073 8.23438 23.9727" stroke="white" stroke-width="1.8" stroke-miterlimit="10"/>
</svg>
    );
}
export const EditIcon = ({ className }: IconProps) => {
    return (
        <svg  viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M13.2746 20.9988H7.48204C2.23979 20.9988 0 18.759 0 13.5168V7.72423C0 2.48197 2.23979 0.242188 7.48204 0.242188H9.41289C9.80871 0.242188 10.137 0.570432 10.137 0.966256C10.137 1.36208 9.80871 1.69032 9.41289 1.69032H7.48204C3.03143 1.69032 1.44814 3.27362 1.44814 7.72423V13.5168C1.44814 17.9674 3.03143 19.5507 7.48204 19.5507H13.2746C17.7252 19.5507 19.3085 17.9674 19.3085 13.5168V11.5859C19.3085 11.1901 19.6367 10.8619 20.0326 10.8619C20.4284 10.8619 20.7566 11.1901 20.7566 11.5859V13.5168C20.7566 18.759 18.5168 20.9988 13.2746 20.9988Z" fill="#2E8CE5"/>
<path d="M6.99755 16.1154C6.40864 16.1154 5.868 15.903 5.47218 15.5168C4.99912 15.0438 4.79638 14.3583 4.90258 13.6342L5.31771 10.7283C5.39494 10.1684 5.76181 9.44431 6.15763 9.04848L13.7651 1.4409C15.6863 -0.480299 17.6365 -0.480299 19.5577 1.4409C20.61 2.49321 21.083 3.56483 20.9865 4.63645C20.8996 5.50533 20.4362 6.35491 19.5577 7.22379L11.9501 14.8314C11.5543 15.2272 10.8302 15.5941 10.2703 15.6713L7.36441 16.0864C7.23891 16.1154 7.1134 16.1154 6.99755 16.1154ZM14.7885 2.46425L7.18098 10.0718C6.99755 10.2553 6.78516 10.68 6.74654 10.9311L6.33141 13.837C6.29279 14.117 6.35072 14.3487 6.49553 14.4935C6.64034 14.6383 6.87204 14.6962 7.15202 14.6576L10.0579 14.2425C10.3089 14.2038 10.7433 13.9915 10.9171 13.808L18.5247 6.20044C19.1522 5.57291 19.4804 5.01297 19.5287 4.49164C19.5866 3.86411 19.2584 3.19797 18.5247 2.45459C16.98 0.909913 15.918 1.34435 14.7885 2.46425Z" fill="#2E8CE5"/>
<path d="M17.9557 8.52727C17.8881 8.52727 17.8205 8.51761 17.7626 8.49831C15.2235 7.78389 13.2058 5.76615 12.4914 3.22709C12.3852 2.84092 12.6072 2.44509 12.9934 2.32924C13.3795 2.22305 13.7754 2.44509 13.8816 2.83126C14.4608 4.88762 16.0924 6.51919 18.1487 7.09844C18.5349 7.20464 18.757 7.61012 18.6508 7.99629C18.5639 8.32453 18.2742 8.52727 17.9557 8.52727Z" fill="#2E8CE5"/>
</svg>

    );
}