let body = JSON.parse($response.body);

body.data = {
  is_vip: true,
  vip_type: "pro",
  vip_expired_at: 4092599349,
  features: ["remove_watermark", "advanced_tools", "4k_export"]
};

$done({body: JSON.stringify(body)});
