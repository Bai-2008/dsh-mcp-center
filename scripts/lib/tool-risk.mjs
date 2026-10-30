const NAME_PATTERN =
  /^(create|update|delete|remove|pay|order|book|cancel|refund|send|submit|upload|write|modify|insert)[_.-]/i;

const TEXT_PATTERN =
  /(下单|删除|取消|支付|退款|预订|提交|写入|上传|修改|新建|创建|购买|发起)/;

export function isSideEffectTool(tool) {
  if (tool?.side_effect === true) {
    return true;
  }

  const annotations = tool?.annotations ?? {};
  if (annotations.destructiveHint === true) {
    return true;
  }
  if (annotations.readOnlyHint === false) {
    return true;
  }

  return NAME_PATTERN.test(tool?.name ?? "") || TEXT_PATTERN.test(tool?.description ?? "");
}
