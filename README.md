# VideoSlidePuzzle
- classic sliding puzzle is implemented for web and android using ionic vue
- user can create own sliding puzzle from any user provided video or image
- play on [web](https://slidepuzzle.web.app/)
- play on [andorid](https://play.google.com/store/apps/details?id=com.video.slide.puzzle.app)


# Result  
<p float="middle">
  <img src="/doc/screenshot0.png" width="32%" />
  <img src="/doc/screenshot2.png" width="32%" /> 
  <img src="/doc/screenshot3.png" width="32%" />
</p>


# Features
- user can create own sliding puzzle from user given video or image 
- video tile is supported to visualise during play sliding puzzle
- provide sample video for creating sliding puzzle
- timer is placed to record solve time of sliding puzzle
- tablet screen size is supported to enlarge sliding puzzle
- support simultaneous movement on same row tiles 

# How to play
- touch image tile to move sliding puzzle tile to empty space
- sliding puzzle game is solved when all splitted tile is in ordered position

  
# Required environment to run    
```python
npm install -g @ionic/cli@latest native-run cordova-res    
npm install -g firebase-tools

ionic start
cd VideoSlidePuzzle
npm i deepcopy  --save
npm i @tweenjs/tween.js  --save
npm i python-range --save
npm i shuffle-array --save
npm i vue3-touch-events --save
```

# Run serve
```python
ionic serve
```

# Run build   
```python
# android deploy
ionic cap add android
cordova-res android --skip-config --copy
ionic build && ionic cap sync android && ionic cap open android

# web deploy
vue add pwa
firebase login
firebase init
ionic build
firebase deploy
```
  
# Acknowledgement and References  
- [Vue.js](https://vuejs.org/)
- [ionic](https://ionicframework.com/)
- [vue-8-puzzle](https://github.com/meganetaaan/vue-8-puzzle)
- [Vue Slide Puzzle](https://codepen.io/oldcoyote/pen/OwJvxV)
- [Slide Puzzle](https://codepen.io/mkeke/pen/ByzXeJ) 
- [python-range](https://github.com/michal-perlakowski/range)
- [vue3-touch-events](https://github.com/robinrodricks/vue3-touch-events)
- [tween.js](https://github.com/tweenjs/tween.js/)
- [deepcopy](https://www.npmjs.com/package/deepcopy)
- [shuffle-array](https://github.com/pazguille/shuffle-array)
- [Bokeh](https://pixabay.com/videos/id-55859/) 
- [Mountain](https://pixabay.com/videos/id-65953/) 
- [Waves](https://pixabay.com/videos/id-61950/) 
- [privacy-policy-generator](https://www.termsfeed.com/privacy-policy-generator/) 
- [google play console app sign](https://pleasantstep.tistory.com/21?category=794635) 
- [device-art-generator](https://developer.android.com/distribute/marketing-tools/device-art-generator) 
- [wood puzzle image](https://www.pexels.com/ko-kr/photo/6469463/) 
- [miricanvas](https://www.miricanvas.com/)
