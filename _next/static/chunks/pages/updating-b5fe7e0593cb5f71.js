(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[884],{5236:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/updating",function(){return s(86)}])},86:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return l}});var t=s(5893),r=s(2673),o=s(9298),a=s(5482);s(6834);var i=s(2643);let l=[{depth:3,value:"Version 6.0.0",id:"version-600"},{depth:4,value:"iOS",id:"ios"},{depth:3,value:"Version 5.0.0",id:"version-500"},{depth:4,value:"gradle-wrapper.properties",id:"gradle-wrapperproperties"},{depth:4,value:"android/app/build.gradle",id:"androidappbuildgradle"},{depth:4,value:"android/gradle.properties",id:"androidgradleproperties"},{depth:4,value:"Gradle 3 and target SDK 26 requirement",id:"gradle-3-and-target-sdk-26-requirement"},{depth:4,value:"ExoPlayer 2.9.0 Java 1.8 requirement",id:"exoplayer-290-java-18-requirement"},{depth:4,value:"ExoPlayer no longer detaches",id:"exoplayer-no-longer-detaches"},{depth:4,value:"useTextureView now defaults to true",id:"usetextureview-now-defaults-to-true"},{depth:3,value:"Version 3.0.0",id:"version-300"},{depth:4,value:"All platforms now auto-play",id:"all-platforms-now-auto-play"},{depth:4,value:"All platforms now keep their paused state when returning from the background",id:"all-platforms-now-keep-their-paused-state-when-returning-from-the-background"},{depth:4,value:"Use Android target SDK 27 by default",id:"use-android-target-sdk-27-by-default"},{depth:5,value:"Using app build settings",id:"using-app-build-settings"}];function _createMdxContent(e){let n=Object.assign({h1:"h1",h3:"h3",h4:"h4",p:"p",code:"code",a:"a",pre:"pre",span:"span",strong:"strong",h5:"h5"},(0,i.a)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{children:"Updating"}),"\n",(0,t.jsx)(n.h3,{id:"version-600",children:"Version 6.0.0"}),"\n",(0,t.jsx)(n.h4,{id:"ios",children:"iOS"}),"\n",(0,t.jsx)(n.p,{children:"In your project Podfile add support for static dependency linking. This is required to support the new Promises subdependency in the iOS swift conversion."}),"\n",(0,t.jsxs)(n.p,{children:["Add ",(0,t.jsx)(n.code,{children:"use_frameworks! :linkage => :static"})," just under ",(0,t.jsx)(n.code,{children:"platform :ios"})," in your ios project Podfile."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"examples/basic/ios/Podfile#L5",children:"See the example ios project for reference"})}),"\n",(0,t.jsx)(n.h3,{id:"version-500",children:"Version 5.0.0"}),"\n",(0,t.jsx)(n.p,{children:"Probably you want to update your gradle version:"}),"\n",(0,t.jsx)(n.h4,{id:"gradle-wrapperproperties",children:"gradle-wrapper.properties"}),"\n",(0,t.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"#EF6270"},children:"- distributionUrl=https\\://services.gradle.org/distributions/gradle-3.3-all.zip"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"#4BB74A"},children:"+ distributionUrl=https\\://services.gradle.org/distributions/gradle-5.1.1-all.zip"})})]})}),"\n",(0,t.jsx)(n.h4,{id:"androidappbuildgradle",children:(0,t.jsx)(n.strong,{children:"android/app/build.gradle"})}),"\n",(0,t.jsx)(n.p,{children:"From version >= 5.0.0, you have to apply this changes:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"diff","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"diff","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"dependencies {"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   ..."})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    compile project(':react-native-video')"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"#4BB74A"},children:'+   implementation "androidx.appcompat:appcompat:1.0.0"'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"#EF6270"},children:'-   implementation "com.android.support:appcompat-v7:${rootProject.ext.supportLibVersion}"'})}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(n.h4,{id:"androidgradleproperties",children:(0,t.jsx)(n.strong,{children:"android/gradle.properties"})}),"\n",(0,t.jsx)(n.p,{children:"Migrating to AndroidX (needs version >= 5.0.0):"}),"\n",(0,t.jsx)(n.pre,{"data-language":"groovy","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"groovy","data-theme":"default",children:[(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"android"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"useAndroidX"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"android"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"enableJetifier"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"true"})]})]})}),"\n",(0,t.jsx)(n.h4,{id:"gradle-3-and-target-sdk-26-requirement",children:"Gradle 3 and target SDK 26 requirement"}),"\n",(0,t.jsx)(n.p,{children:"In order to support ExoPlayer 2.9.0, you must use version 3 or higher of the Gradle plugin. This is included by default in React Native 0.57."}),"\n",(0,t.jsx)(n.h4,{id:"exoplayer-290-java-18-requirement",children:"ExoPlayer 2.9.0 Java 1.8 requirement"}),"\n",(0,t.jsxs)(n.p,{children:["ExoPlayer 2.9.0 uses some Java 1.8 features, so you may need to enable support for Java 1.8 in your app/build.gradle file. If you get an error, compiling with ExoPlayer like:\n",(0,t.jsx)(n.code,{children:"Default interface methods are only supported starting with Android N (--min-api 24)"})]}),"\n",(0,t.jsx)(n.p,{children:"Add the following to your app/build.gradle file:"}),"\n",(0,t.jsx)(n.pre,{"data-language":"groovy","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"groovy","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"android {"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   compileOptions {"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"     targetCompatibility "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"JavaVersion."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"VERSION_1_8"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"   }"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsx)(n.h4,{id:"exoplayer-no-longer-detaches",children:"ExoPlayer no longer detaches"}),"\n",(0,t.jsx)(n.p,{children:"When using a router like the react-navigation TabNavigator, switching between tab routes would previously cause ExoPlayer to detach causing the video player to pause. We now don't detach the view, allowing the video to continue playing in a background tab. This matches the behavior for iOS."}),"\n",(0,t.jsx)(n.h4,{id:"usetextureview-now-defaults-to-true",children:"useTextureView now defaults to true"}),"\n",(0,t.jsxs)(n.p,{children:["The SurfaceView, which ExoPlayer has been using by default has a number of quirks that people are unaware of and often cause issues. This includes not supporting animations or scaling. It also causes strange behavior if you overlay two videos on top of each other, because the SurfaceView will ",(0,t.jsx)(n.a,{href:"https://developer.android.com/reference/android/view/SurfaceView",children:"punch a hole"})," through other views. Since TextureView doesn't have these issues and behaves in the way most developers expect, it makes sense to make it the default."]}),"\n",(0,t.jsxs)(n.p,{children:["TextureView is not as fast as SurfaceView, so you may still want to enable SurfaceView support. To do this, you can set ",(0,t.jsx)(n.code,{children:"useTextureView={false}"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"version-300",children:"Version 3.0.0"}),"\n",(0,t.jsx)(n.h4,{id:"all-platforms-now-auto-play",children:"All platforms now auto-play"}),"\n",(0,t.jsxs)(n.p,{children:["Previously, on Android ExoPlayer if the paused prop was not set, the media would not automatically start playing. The only way it would work was if you set ",(0,t.jsx)(n.code,{children:"paused={false}"}),". This has been changed to automatically play if paused is not set so that the behavior is consistent across platforms."]}),"\n",(0,t.jsx)(n.h4,{id:"all-platforms-now-keep-their-paused-state-when-returning-from-the-background",children:"All platforms now keep their paused state when returning from the background"}),"\n",(0,t.jsx)(n.p,{children:"Previously, on Android MediaPlayer if you setup an AppState event when the app went into the background and set a paused prop so that when you returned to the app the video would be paused it would be ignored."}),"\n",(0,t.jsx)(n.p,{children:"Note, Windows does not have a concept of an app going into the background, so this doesn't apply there."}),"\n",(0,t.jsx)(n.h4,{id:"use-android-target-sdk-27-by-default",children:"Use Android target SDK 27 by default"}),"\n",(0,t.jsxs)(n.p,{children:["Version 3.0 updates the Android build tools and SDK to version 27. React Native is in the process of ",(0,t.jsx)(n.a,{href:"https://github.com/facebook/react-native/issues/18095#issuecomment-395596130",children:"switching over"})," to SDK 27 in preparation for Google's requirement that new Android apps ",(0,t.jsx)(n.a,{href:"https://android-developers.googleblog.com/2017/12/improving-app-security-and-performance.html",children:"use SDK 26"})," by August 2018."]}),"\n",(0,t.jsx)(n.p,{children:"You will either need to install the version 27 SDK and version 27.0.3 buildtools or modify your build.gradle file to configure react-native-video to use the same build settings as the rest of your app as described below."}),"\n",(0,t.jsx)(n.h5,{id:"using-app-build-settings",children:"Using app build settings"}),"\n",(0,t.jsxs)(n.p,{children:["You will need to create a ",(0,t.jsx)(n.code,{children:"project.ext"})," section in the top-level build.gradle file (not app/build.gradle). Fill in the values from the example below using the values found in your app/build.gradle file."]}),"\n",(0,t.jsx)(n.pre,{"data-language":"groovy","data-theme":"default",children:(0,t.jsxs)(n.code,{"data-language":"groovy","data-theme":"default",children:[(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Top-level build file where you can add configuration options common to all sub-projects/modules."})}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"buildscript {"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"allprojects {"})}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:".."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:". "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"// Various other settings go here"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    project"}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"."}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"ext {"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        compileSdkVersion "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"31"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        buildToolsVersion "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"30.0.2"'})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:" "}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        minSdkVersion "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"21"})]}),"\n",(0,t.jsxs)(n.span,{className:"line",children:[(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"        targetSdkVersion "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,t.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"22"})]}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"    }"})}),"\n",(0,t.jsx)(n.span,{className:"line",children:(0,t.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"}"})})]})}),"\n",(0,t.jsxs)(n.p,{children:["If you encounter an error ",(0,t.jsx)(n.code,{children:"Could not find com.android.support:support-annotations:27.0.0."})," reinstall your Android Support Repository."]})]})}let d={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,i.a)(),e.components);return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/updating.md",route:"/updating",pageMap:[{kind:"Meta",data:{index:"Introduction",installation:"Installation",component:"API",other:"Other",separator_versions:{type:"separator",title:""},updating:"Updating",changelog:{title:"Changelog",newWindow:!0,href:"https://github.com/react-native-video/react-native-video/blob/master/CHANGELOG.md"},separator_community:{type:"separator",title:""},projects:"Useful projects"}},{kind:"Folder",name:"component",route:"/component",children:[{kind:"Meta",data:{props:"Properties",drm:"DRM",events:"Events",methods:"Methods"}},{kind:"MdxPage",name:"drm",route:"/component/drm"},{kind:"MdxPage",name:"events",route:"/component/events"},{kind:"MdxPage",name:"methods",route:"/component/methods"},{kind:"MdxPage",name:"props",route:"/component/props"}]},{kind:"MdxPage",name:"index",route:"/"},{kind:"MdxPage",name:"installation",route:"/installation"},{kind:"Folder",name:"other",route:"/other",children:[{kind:"Meta",data:{caching:"Caching",misc:"Misc",debug:"Debugging"}},{kind:"MdxPage",name:"caching",route:"/other/caching"},{kind:"MdxPage",name:"debug",route:"/other/debug"},{kind:"MdxPage",name:"misc",route:"/other/misc"}]},{kind:"MdxPage",name:"projects",route:"/projects"},{kind:"MdxPage",name:"updating",route:"/updating"}],flexsearch:{codeblocks:!0},title:"Updating",headings:l},pageNextRoute:"/updating",nextraLayout:o.ZP,themeConfig:a.Z};n.default=(0,r.j)(d)},5482:function(e,n,s){"use strict";var t=s(5893);s(7294),n.Z={head:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("meta",{name:"language",content:"en"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width,initial-scale=1"}),(0,t.jsx)("meta",{name:"description",content:"Video component for React Native"}),(0,t.jsx)("meta",{name:"og:title",content:"React Native Video"}),(0,t.jsx)("meta",{name:"og:description",content:"A Video component for React Native"})]}),logo:(0,t.jsxs)("span",{children:["\uD83C\uDFAC ",(0,t.jsx)("strong",{children:"Video component"})," for React Native"]}),faviconGlyph:"\uD83C\uDFAC",project:{link:"https://github.com/react-native-video/react-native-video"},docsRepositoryBase:"https://github.com/react-native-video/react-native-video/tree/master/docs/",footer:{text:(0,t.jsxs)("span",{children:["Built with love ❤️ by ",(0,t.jsx)("strong",{children:"React Native Community"})]})},useNextSeoProps:()=>({titleTemplate:"%s – Video"})}}},function(e){e.O(0,[774,361,888,179],function(){return e(e.s=5236)}),_N_E=e.O()}]);