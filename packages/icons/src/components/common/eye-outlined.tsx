
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-eye-outlined'
const _prefix = getPrefixCls(_role)

export const EyeOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 234.666667c157.098667 0 299.306667 92.437333 426.666667 277.333333-127.36 184.896-269.568 277.333333-426.666667 277.333333-157.098667 0-299.306667-92.437333-426.666667-277.333333 127.36-184.896 269.568-277.333333 426.666667-277.333333z m0 85.333333c-111.658667 0-217.322667 60.629333-318.613333 189.056L191.082667 512l2.304 2.944c99.178667 125.76 202.56 186.496 311.637333 188.970667L512 704c109.226667 0 212.736-58.026667 312-180.778667l8.896-11.221333-2.282667-2.944c-99.178667-125.76-202.56-186.496-311.637333-188.970667L512 320z m0 42.666667a149.333333 149.333333 0 1 1 0 298.666666 149.333333 149.333333 0 0 1 0-298.666666z m0 85.333333a64 64 0 1 0 0 128 64 64 0 0 0 0-128z" p-id="39355"></path></svg>
    )
  }
)

if (__DEV__) {
  EyeOutlined.displayName = 'EyeOutlined'
}
  