<template>
  <div class="aboutPage">
    <div class="aboutPageFirstFold">
      <div class="aboutPageMissionStatementHeader">
        <p id="aboutPageMissionStatementTitle">Why Predictive</p>
        <p id="aboutPageMissionStatementSubheader">
          We believe that Paid Media is underleveraged when scaling a business
          to the next level. This pain is real and felt by key marketing and
          sales stakeholders. At Predictive we help SaaS CMOs, Marketing
          Directors and Managers plan, test, and build new revenue streams using
          proven strategies and channels.
        </p>
        <div class="headerCTA">
          <ButtonClick
            ><router-link to="/contact-us"
              ><p id="calculatorLink">Contact Us</p>
            </router-link></ButtonClick
          > 
        </div>
      </div>
      <div class="aboutPageMissionStatementImg">
        <img
          id="aboutPageFirstFoldImg"
          src="@/assets/missionStatementImg.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import TextBox from "@/components/TextBox.vue";
import ButtonClick from "@/components/ButtonClick.vue";
// import BackgroundGradient from "@/components/BackgroundGradient.vue";

export default {
  name: "AboutView",
  components: {
    // TextBox,
    ButtonClick,
    // BackgroundGradient,
  },
};
</script>

<style>
.aboutPage {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background-color: linear-gradient(180deg, #94b1d6, #fff);
}

.aboutPageFirstFold {
  display: flex;
  position: absolute;
  z-index: 1;
  top: 25%;
  left: 15%;
}

.aboutPageMissionStatementHeader {
  width: 400px;
  height: 50px;
}

#aboutPageMissionStatementTitle {
  margin-top: 80px;
  font-size: 30px;
  font-weight: bold;
  height: 50px;
  width: 400px;
  text-decoration: underline;
  color: #002c48;
}
#aboutPageMissionStatementSubheader {
  margin-top: 40px;
  position: relative;
  font-size: 25px;
  height: 200px;
  width: 600px;
  color: #002c48;
}

#aboutPageFirstFoldImg {
  height: 500px;
  width: 500px;
  margin-left: 40%;
}

.headerCTA {
  display: flex;
  align-items: center;
  margin-top: 50px;
  height: 30px;
  width: 120px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
}

.aboutPage a {
  text-decoration: none;
  text-align: center;
  font-size: 20px;
  color: #002c48;
  font-weight: bold;
}
</style>
