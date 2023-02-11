import{_ as e,o as t,c as a,a as s}from"./app.d2d70541.js";const b=JSON.parse('{"title":"Untitled object in Sensors Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"device_orientation Type","slug":"device-orientation-type","link":"#device-orientation-type","children":[]},{"level":2,"title":"alpha","slug":"alpha","link":"#alpha","children":[{"level":3,"title":"alpha Type","slug":"alpha-type","link":"#alpha-type","children":[]},{"level":3,"title":"alpha Constraints","slug":"alpha-constraints","link":"#alpha-constraints","children":[]},{"level":3,"title":"alpha Examples","slug":"alpha-examples","link":"#alpha-examples","children":[]},{"level":3,"title":"alpha Access Restrictions","slug":"alpha-access-restrictions","link":"#alpha-access-restrictions","children":[]}]},{"level":2,"title":"beta","slug":"beta","link":"#beta","children":[{"level":3,"title":"beta Type","slug":"beta-type","link":"#beta-type","children":[]},{"level":3,"title":"beta Constraints","slug":"beta-constraints","link":"#beta-constraints","children":[]},{"level":3,"title":"beta Examples","slug":"beta-examples","link":"#beta-examples","children":[]}]},{"level":2,"title":"gamma","slug":"gamma","link":"#gamma","children":[{"level":3,"title":"gamma Type","slug":"gamma-type","link":"#gamma-type","children":[]},{"level":3,"title":"gamma Constraints","slug":"gamma-constraints","link":"#gamma-constraints","children":[]},{"level":3,"title":"gamma Examples","slug":"gamma-examples","link":"#gamma-examples","children":[]}]},{"level":2,"title":"absolute","slug":"absolute","link":"#absolute","children":[{"level":3,"title":"absolute Type","slug":"absolute-type","link":"#absolute-type","children":[]},{"level":3,"title":"absolute Examples","slug":"absolute-examples","link":"#absolute-examples","children":[]}]}],"relativePath":"basics/sensors/0.0.1/dereferenced-defs-device_orientation.md","lastUpdated":1670971504000}'),n={name:"basics/sensors/0.0.1/dereferenced-defs-device_orientation.md"},i=s(`<h1 id="untitled-object-in-sensors-schema" tabindex="-1">Untitled object in Sensors Schema <a class="header-anchor" href="#untitled-object-in-sensors-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="device-orientation-type" tabindex="-1">device_orientation Type <a class="header-anchor" href="#device-orientation-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-defs-device_orientation.html">Details</a>)</p><h1 id="device-orientation-properties" tabindex="-1">device_orientation Properties <a class="header-anchor" href="#device-orientation-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#alpha">alpha</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-defs-device_orientation-properties-alpha.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/alpha">Sensors</a></td></tr><tr><td style="text-align:left;"><a href="#beta">beta</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-defs-device_orientation-properties-beta.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/beta">Sensors</a></td></tr><tr><td style="text-align:left;"><a href="#gamma">gamma</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-defs-device_orientation-properties-gamma.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/gamma">Sensors</a></td></tr><tr><td style="text-align:left;"><a href="#absolute">absolute</a></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-defs-device_orientation-properties-absolute.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/absolute">Sensors</a></td></tr></tbody></table><h2 id="alpha" tabindex="-1">alpha <a class="header-anchor" href="#alpha" aria-hidden="true">#</a></h2><p>The z-axis rotation of the device, in degrees, around the z-axis. This value represents the compass direction the device is facing.</p><p><code>alpha</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-alpha.html">Alpha</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-defs-device_orientation-properties-alpha.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/alpha">Sensors</a></p></li></ul><h3 id="alpha-type" tabindex="-1">alpha Type <a class="header-anchor" href="#alpha-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-alpha.html">Alpha</a>)</p><h3 id="alpha-constraints" tabindex="-1">alpha Constraints <a class="header-anchor" href="#alpha-constraints" aria-hidden="true">#</a></h3><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>360</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h3 id="alpha-examples" tabindex="-1">alpha Examples <a class="header-anchor" href="#alpha-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h3 id="alpha-access-restrictions" tabindex="-1">alpha Access Restrictions <a class="header-anchor" href="#alpha-access-restrictions" aria-hidden="true">#</a></h3><p>The value of this property is managed exclusively by the owning authority, and attempts by an application to modify the value of this property are expected to be ignored or rejected by that owning authority</p><h2 id="beta" tabindex="-1">beta <a class="header-anchor" href="#beta" aria-hidden="true">#</a></h2><p>The x-axis rotation of the device, in degrees, around the x-axis. This value represents the front-to-back tilt of the device.</p><p><code>beta</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-beta.html">Beta</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-defs-device_orientation-properties-beta.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/beta">Sensors</a></p></li></ul><h3 id="beta-type" tabindex="-1">beta Type <a class="header-anchor" href="#beta-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-beta.html">Beta</a>)</p><h3 id="beta-constraints" tabindex="-1">beta Constraints <a class="header-anchor" href="#beta-constraints" aria-hidden="true">#</a></h3><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>180</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-180</code></p><h3 id="beta-examples" tabindex="-1">beta Examples <a class="header-anchor" href="#beta-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="gamma" tabindex="-1">gamma <a class="header-anchor" href="#gamma" aria-hidden="true">#</a></h2><p>The y-axis rotation of the device, in degrees, around the y-axis. This value represents the left-to-right tilt of the device.</p><p><code>gamma</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-gamma.html">Gamma</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-defs-device_orientation-properties-gamma.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/gamma">Sensors</a></p></li></ul><h3 id="gamma-type" tabindex="-1">gamma Type <a class="header-anchor" href="#gamma-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-defs-device_orientation-properties-gamma.html">Gamma</a>)</p><h3 id="gamma-constraints" tabindex="-1">gamma Constraints <a class="header-anchor" href="#gamma-constraints" aria-hidden="true">#</a></h3><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>90</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>-90</code></p><h3 id="gamma-examples" tabindex="-1">gamma Examples <a class="header-anchor" href="#gamma-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">0</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="absolute" tabindex="-1">absolute <a class="header-anchor" href="#absolute" aria-hidden="true">#</a></h2><p>A boolean value that indicates whether the device&#39;s orientation is provided as relative to the Earth&#39;s coordinate system or as relative to the device&#39;s coordinate system.</p><p><code>absolute</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>boolean</code> (<a href="./dereferenced-defs-device_orientation-properties-absolute.html">Absolute</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-defs-device_orientation-properties-absolute.html" title="https://schema.vinv.io/vinv-sensors/0.0.1.json#/$defs/device_orientation/properties/absolute">Sensors</a></p></li></ul><h3 id="absolute-type" tabindex="-1">absolute Type <a class="header-anchor" href="#absolute-type" aria-hidden="true">#</a></h3><p><code>boolean</code> (<a href="./dereferenced-defs-device_orientation-properties-absolute.html">Absolute</a>)</p><h3 id="absolute-examples" tabindex="-1">absolute Examples <a class="header-anchor" href="#absolute-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#81A1C1;">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,51),l=[i];function r(o,d,p,c,h,m){return t(),a("div",null,l)}const f=e(n,[["render",r]]);export{b as __pageData,f as default};
