<template>
  <div id="app">
    <header
      style="
        width: 100%;
        height: 80px;
        background-color: #000;
        position: relative;
        z-index: 1000;
        padding: 20px;
        font-size: 2rem;
      "
    >
      HELLO NFT WORLD!
    </header>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <div
          style="
            max-width: 300px;
            height: 300px;
            padding-top: 10%;
            margin: 0 auto;
            text-align: center;
          "
        >
          <h3 style="font-size: 2rem; padding: 1rem">INTRODUCE</h3>
          <div style="font-size: 1.5rem; line-height: 3.2rem">
            Klaytn(Klay) based NFT Generative Project.<br />
            Randomly generated 10,000 Cartoon Style,<br />
            "ANIMALS PUNKS"
          </div>
        </div>
      </div>
      <div class="section">
        <div
          style="
            width: 60rem;
            padding-top: 10%;
            margin: 0 auto;
            text-align: center;
          "
        >
          <h3
            style="
              font-size: 2rem;
              padding: 1rem 1.5rem 3rem 1.5rem;
              margin-bottom: 1.5rem;
            "
          >
            ROAD MAP
          </h3>
          <div style="display: flex; flex-wrap: wrap">
            <div style="flex-basis: 48%; padding: 10px; margin-bottom: 1.5rem">
              <h3 style="padding-bottom: 30px; font-size: 2rem">1. Strategy</h3>
              <div style="font-size: 1.5rem; line-height: 2.5rem">
                Producing Various Contents such as<br />
                Kakao Talk Emoticon, Goods, and Metaverse Wearables
              </div>
            </div>
            <div style="flex-basis: 48%; padding: 10px; margin-bottom: 1.5rem">
              <h3 style="padding-bottom: 30px; font-size: 2rem">1. Strategy</h3>
              <div style="font-size: 1.5rem; line-height: 2.5rem">
                Producing Various Contents such as<br />
                Kakao Talk Emoticon, Goods, and Metaverse Wearables
              </div>
            </div>
            <div style="flex-basis: 48%; padding: 10px; margin-bottom: 1.5rem">
              <h3 style="padding-bottom: 30px; font-size: 2rem">1. Strategy</h3>
              <div style="font-size: 1.5rem; line-height: 2.5rem">
                Producing Various Contents such as<br />
                Kakao Talk Emoticon, Goods, and Metaverse Wearables
              </div>
            </div>
            <div style="flex-basis: 48%; padding: 10px; margin-bottom: 1.5rem">
              <h3 style="padding-bottom: 30px; font-size: 2rem">1. Strategy</h3>
              <div style="font-size: 1.5rem; line-height: 2.5rem">
                Producing Various Contents such as<br />
                Kakao Talk Emoticon, Goods, and Metaverse Wearables
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div
          style="
            max-width: 300px;
            height: 300px;
            padding-top: 10%;
            margin: 0 auto;
            text-align: center;
          "
        >
          <h3 style="font-size: 2rem; padding: 1rem">CONTACT US</h3>
          <div style="font-size: 1.5rem; line-height: 3.2rem">
            E-MAIL: XXXX.gmail.com<br />
            TEL : XXX-XXX-XXX<br />
            "THANKS"
          </div>
        </div>
      </div>
    </full-page>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        navigation: true,
        sectionsColor: [
          "#000",
          "#2c3e4f",
          "#000",
          "#1bcee6",
          "#ee1a59",
          "#ba5be9",
        ],
        navigationTooltips: ["INTRODUCE", "ROADMAP", "CONTACT US"],
      },
    };
  },
};
</script>

<style>
body {
  color: #fff;
}

.section {
  height: 100vh;
}

.fp-tableCell {
  display: block !important;
}
</style>
