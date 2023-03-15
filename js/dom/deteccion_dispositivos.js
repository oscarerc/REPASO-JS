const d = document;
ñ = navigator;
// contiene la informacion del dispositivo que estamos visitando
ua = n.userAgent;

export default function userDeviceInfo(id) {
const $id= d.getElementById(id),
    ismobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/ios/i),
    any: function () {
      return this.andorid() || this.ios();
    },
  },

    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },

    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      ie: () => ua.match(/msie| iemobile/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          opera() ||
          ie() ||
          edge()
        );
      },
    };
}
