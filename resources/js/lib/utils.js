import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import React from 'react';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
// resources/js/lib/utils.js

export function formatNumber(number) {
    return new Intl.NumberFormat('fr-GN', {
        style: 'currency',
        currency: 'GNF',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(number);
}

export function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('fr-GN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

export function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}
