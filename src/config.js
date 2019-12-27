const CONFIG = {
  brandText: "商业地产大数据平台",
  description: "fangchan data scraper and analysis",
  baseURI: "http://47.93.129.193/",
  accountToken: "42c3422ed1eb08df4a68",
  // baseURI: "http://localhost:8000/",
  // accountToken: "9ad7911b469ebe0723e4",
  version: "v0.1.1"
};

if (process.env.BASE_URI) CONFIG.baseURI = process.env.BASE_URI;

if (process.env.ACCOUNT_TOKEN) {
  CONFIG.accountToken = process.env.ACCOUNT_TOKEN;
}

if (process.env.VERSION) {
  CONFIG.version = process.env.VERSION;
}

export default CONFIG;
