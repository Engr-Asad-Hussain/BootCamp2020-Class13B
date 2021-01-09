# CORTEX
URL: https://github.com/Engr-Asad-Hussain/BootCamp2020-Class13B.git

Surge: http://open-crown123.surge.sh/

----------------------------------------------------------

### ```counts[0] ? <SideBar counts={counts} /> : null```
- ternary operator

### ```id={`id${index}`}```
- concatenation

### Animations in steps
```
let layerRef = useWebAnimations({
    keyframes: {
        opacity: [0, '80%', 0, '80%', 0, '80%', 0, 0, 0, 0]
    },
    timing: {
        duration: 800,
        easing: 'steps(10)',
        iterations: Infinity
    }
});
```