import React from 'react'

import Link from 'next/link';

import classNames from 'classnames';

import { LucideIcon } from 'lucide-react';

type Props = {
    text: string;
    icon?: LucideIcon;
    href?: string;
    variant: 'default' | 'primary' | 'secondary'
    onClick?: () => void
}

const CustomButton = ({variant,text,icon:Icon, href, onClick}: Props) => {
    const btnClassname = classNames(
        'px-4 py-2 flex items-center justify-center text-base font-semibold shadow-md rounded-lg gap-3',
        {
            'bg-base text-black': variant == 'default'
        },
        {
            'bg-primary hover:bg-primary-light text-white': variant == 'primary'
        },
        {
            'bg-secondary hover:bg-secondary-light text-white': variant == 'secondary'
        },
    )
    return (
        href ? 
        <Link 
            href={href}
            target='blank'
            className={btnClassname}
        >
            {Icon && <Icon className={btnClassname} size={10}/>}
            {text}
        </Link> : 
        <button
            className={btnClassname}
        >
            {Icon && <Icon className={btnClassname} size={10}/>}
            {text}
        </button>
    )
}

export default CustomButton