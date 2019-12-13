<template>
 <div class="q-pa-md ">
    <div class="row justify-center q-gutter-md">
        <q-intersection once transition="scale">
            <img src="statics/svg/EinPaarWorte.svg" style="max-width: 200px;"/>
            <div class="row justify-center text-uppercase text-h5 text-grey q-pb-md">
                über uns
            </div>
            <div style="max-width: 400px">
                <p>
                    Jeder mit einem Herz für asiatisches Essen wird sich bei uns absolut wohlfühlen.
                    Unser Ziel ist es unseren Gästen eine vietnamesische Küche anzubieten, die an authentische Gerichte aus Saigon erinnern.
                </p>

                <p>
                    Unsere Familienrezepte werden seit Generationen weitergereicht und werden stetig verfeinert.
                    Wir hoffen, dass wir Sie mit leckerem, heimischem Essen überzeugen können!
                </p>
                <img src="statics/svg/IhrDiAnDiTeam.svg" style="max-width: 300px" />
            </div>
        </q-intersection>
         <q-intersection>
            <div class="videocontent">
                <video-player
                    class="video-js vjs-big-play-centered vjs-fill"
                    :options="playerOptions"
                >
                </video-player>
            </div>
        </q-intersection>
    </div>
 </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  components: {
    videoPlayer
  },
  data () {
    return {
      playerOptions: {
        // videojs options
        sources: [{
          type: 'video/mp4',
          src: 'statics/videos/ad.mp4'
        }],
        fill: true,
        aspectRatio: '16:9',
        poster: 'statics/videos/ad_preview.png'
        // reponsive: true
      }
    }
  }
}
</script>

<style>
.videocontent {
    width: 500px;
}
.video-js {
    background-color: transparent;
}
</style>
