import { prefixCls } from '/@/core/settings/style';

export function useStyle(scope: string): { prefixCls: string; prefixVar: string } {
  return {
    prefixCls: `${prefixCls}-${scope}`,
    prefixVar: prefixCls,
  };
}
