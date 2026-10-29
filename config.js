module.exports = {
  // true مفعل
  // false غير مفعل
  bots: [
    {
      token: "MTU2NTIwMjg0NTMwODAyNjg5MQ.GtWs0L.Q48YCi2Eyioohy3-PHWVaITYm53Y0yACCFlhuU", // توكن البوت
      voiceChannelId: "1564917589044629585", // ايدي روم الي يكون فيه البوت
      mute: true, // الميوت مفعل او لا
      deafen: true // الدفن مفعل ولا لا
    },

    // الي فوق كله ينطبق تحت

    {
      token: "MTU2NTIwMjg0NTMwODAyNjg5MQ.GtWs0L.Q48YCi2Eyioohy3-PHWVaITYm53Y0yACCFlhuU",
      voiceChannelId: "1564917589044629585",
      mute: true,
      deafen: true
    },

  ]
};
token: process.env.TOKEN || "MTU2NTIwMjg0NTMwODAyNjg5MQ.GtWs0L.Q48YCi2Eyioohy3-PHWVaITYm53Y0yACCFlhuU",