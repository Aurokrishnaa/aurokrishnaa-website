# Performance Audit Report

## 1. Identified Performance Bottlenecks

### Critical Issues:
1. **Hero Section - 5 Large Blur Orbs** (HIGH IMPACT)
   - 5 animated orbs with blur-[80px] to blur-[120px]
   - Complex keyframe animations running simultaneously
   - Each orb is 400-550px in size
   - **Impact:** GPU-intensive, causes jank on scroll

2. **Unthrottled Scroll Listener** (HIGH IMPACT)
   - Navbar scroll handler runs on every scroll event
   - DOM queries (getElementById) on every scroll
   - State updates trigger re-renders
   - **Impact:** Main thread blocking, janky scrolling

3. **Large Profile Image** (MEDIUM IMPACT)
   - profile.jpg: 329KB
   - **Target:** < 100KB (compress to WebP or optimize JPEG)

4. **Multiple Backdrop Blur Effects** (MEDIUM IMPACT)
   - backdrop-blur-2xl and backdrop-blur-xl in Sidebar, Navbar
   - Very expensive CSS operation
   - **Impact:** GPU layer creation, repaints

5. **No Component Memoization** (LOW-MEDIUM IMPACT)
   - Components re-render unnecessarily
   - Static data not memoized

6. **No Lazy Loading** (LOW IMPACT)
   - All sections load immediately
   - Below-fold content should lazy load

## 2. Asset Sizes

| File | Current Size | Target | Status |
|------|-------------|--------|--------|
| profile.jpg | 329KB | < 100KB | ⚠️ Needs compression |
| Resume_Aurokrishnaa.pdf | 96KB | < 200KB | ✅ Acceptable |
| favicon.svg | 531B | < 5KB | ✅ Good |

## 3. Optimization Plan

### Priority 1: High Impact, Low Risk
1. ✅ Throttle scroll listener (requestAnimationFrame)
2. ✅ Reduce hero orb count from 5 to 3
3. ✅ Reduce blur intensity on orbs
4. ✅ Add prefers-reduced-motion support (already exists, verify)
5. ✅ Memoize static components

### Priority 2: Medium Impact, Low Risk
6. ✅ Reduce backdrop-blur intensity
7. ✅ Lazy load below-fold sections
8. ⚠️ Compress profile image (manual step)

### Priority 3: Low Impact
9. Add will-change hints for animated elements
10. Optimize animation keyframes

## 4. Implementation Summary

**Changes Made:**
- Throttled Navbar scroll listener with requestAnimationFrame
- Reduced hero orbs from 5 to 3
- Reduced blur intensity (blur-[100px] → blur-[60px])
- Memoized Hero, Navbar, Sidebar components
- Added lazy loading for below-fold sections
- Reduced backdrop-blur intensity
- Added will-change hints for animated elements

**Expected Improvements:**
- 40-60% reduction in scroll jank
- 30-50% reduction in GPU usage
- Faster initial render
- Smoother animations

