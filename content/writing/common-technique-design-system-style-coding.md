---
title: Common techniques for design system coding style
description: Một số kỹ thuật khi làm việc với design system.
date: 2025-04-06T16:00:00.006Z
modified: 2025-05-06T11:31:14-06:00
published: true
tags:
  - design system
  - clean code
---

Nếu bạn đang xây dựng hoặc làm việc với design system, variant-driven UI, hoặc token-based styling, thì dưới đây là một list kỹ thuật rất thường dùng...

## 1. Variant-driven Styling với class-variance-authority (CVA)

- Giúp tạo class Tailwind dựa trên các biến thể (variants)
- Dễ mở rộng, dễ maintain
- 📘 Docs:
  - https://cva.style/docs
  - Ví dụ nâng cao: https://cva.style/docs/examples/react-tailwind

```js
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center px-4 py-2 font-medium rounded',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        danger: 'bg-danger-600 text-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
```

## 2. DRY Typing from Source of Truth

- Tạo type từ mảng cố định (as const + (typeof arr)[number])
- Tránh viết trùng type và dữ liệu
- THam khảo:
  - https://www.totaltypescript.com/concepts/the-const-assertion-trick
  - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

```js
const variations = ['primary', 'danger', 'neutral'] as const;
type Variation = (typeof variations)[number];

type ButtonProps = {
  variation: Variation;
};
```

## 3. Design Tokens

- Chuẩn hóa các giá trị như màu sắc, spacing, typography v.v...
- Lưu trữ trong JSON / TS object và dùng lại ở nhiều nơi
- Tham khảo:
  - Docs:W3C Design Tokens Community Group
  - Tokens Studio (Figma plugin)
  - Style Dictionary (Amazon)

## 4. Utility-first CSS với Tailwind

- Phối hợp tốt với variant-driven UI
- Có thể cấu hình thêm semantic tokens và variants
- Tham khảo:
  - https://tailwindcss.com/docs
  - https://tailwindcss.com/docs/theme#extending-the-default-theme

## 5. Theming / Color Schemes (Dark mode, Semantic colors)

- Dùng CSS variables để làm semantic tokens (--color-bg, --color-text)
- Cho phép switch theme dễ dàng
- Tham khảo:
  - https://tailwindcss.com/docs/dark-mode
  - https://www.joshwcomeau.com/css/dark-mode/
  - https://css-tricks.com/using-css-custom-properties-to-implement-a-dark-theme/

## 6. Atomic Design Methodology

- Tổ chức component theo 5 cấp độ: Atom → Molecule → Organism → Template → Page
- Tham khảo:
  - https://bradfrost.com/blog/post/atomic-web-design/
  - Storybook tổ chức theo atomic design

## 7. Typed Component Props with Variants

- Dùng `VariantProps<typeof cva>` để tự động tạo kiểu props
- Tránh bugs & đồng bộ với config
- Ví dụ: CVA + React example

1. Cấu hình Variants (cva)

```js
// button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center px-4 py-2 text-sm font-medium rounded',
  {
    variants: {
      variant: {
        primary: 'bg-blue-600 text-white hover:bg-blue-500',
        secondary: 'bg-gray-200 text-black hover:bg-gray-300',
      },
      size: {
        sm: 'text-xs py-1 px-2',
        md: 'text-sm py-2 px-4',
        lg: 'text-base py-3 px-6',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

```

2. Tạo Type từ Variants

```js
export type ButtonVariants = VariantProps<typeof buttonVariants>;

```

3. Tạo Component với Props được typed

```js
import React from 'react';
import { buttonVariants, type ButtonVariants } from './button';
import { cn } from '@/utils/cn';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants;

export const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
};

```

4. Cách dùng:

```js
<Button variant="primary" size="lg">Primary Button</Button>
<Button variant="secondary" size="sm">Secondary Small</Button>

```

## 8. Storybook + MDX for Component Docs

- Ghi chú, mô tả, use-case cụ thể cho từng component
- Cực tốt cho team dùng chung design system
- Tham khảo:
  - https://storybook.js.org/docs/writing-docs/mdx
  - https://storybook.js.org/docs/react/api/csf
