import{_ as e,o as t,c as s,a as r}from"./app.d2d70541.js";const m=JSON.parse('{"title":"Baum Daten Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"tree Type","slug":"tree-type","link":"#tree-type","children":[]},{"level":2,"title":"species","slug":"species","link":"#species","children":[{"level":3,"title":"species Type","slug":"species-type","link":"#species-type","children":[]},{"level":3,"title":"species Constraints","slug":"species-constraints","link":"#species-constraints","children":[]},{"level":3,"title":"species Examples","slug":"species-examples","link":"#species-examples","children":[]}]},{"level":2,"title":"dbh","slug":"dbh","link":"#dbh","children":[{"level":3,"title":"dbh Type","slug":"dbh-type","link":"#dbh-type","children":[]},{"level":3,"title":"dbh Constraints","slug":"dbh-constraints","link":"#dbh-constraints","children":[]},{"level":3,"title":"dbh Examples","slug":"dbh-examples","link":"#dbh-examples","children":[]}]},{"level":2,"title":"height","slug":"height","link":"#height","children":[{"level":3,"title":"height Type","slug":"height-type","link":"#height-type","children":[]},{"level":3,"title":"height Constraints","slug":"height-constraints","link":"#height-constraints","children":[]},{"level":3,"title":"height Examples","slug":"height-examples","link":"#height-examples","children":[]}]},{"level":2,"title":"trunk","slug":"trunk","link":"#trunk","children":[{"level":3,"title":"trunk Type","slug":"trunk-type","link":"#trunk-type","children":[]}]},{"level":2,"title":"crown","slug":"crown","link":"#crown","children":[{"level":3,"title":"crown Type","slug":"crown-type","link":"#crown-type","children":[]}]},{"level":2,"title":"birth","slug":"birth","link":"#birth","children":[{"level":3,"title":"birth Type","slug":"birth-type","link":"#birth-type","children":[]},{"level":3,"title":"birth Constraints","slug":"birth-constraints","link":"#birth-constraints","children":[]},{"level":3,"title":"birth Examples","slug":"birth-examples","link":"#birth-examples","children":[]}]}],"relativePath":"specifications/vinv-tree-inspection/de/0.0.1/dereferenced-properties-baum-daten.md","lastUpdated":null}'),n={name:"specifications/vinv-tree-inspection/de/0.0.1/dereferenced-properties-baum-daten.md"},a=r(`<h1 id="baum-daten-schema" tabindex="-1">Baum Daten Schema <a class="header-anchor" href="#baum-daten-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Tree definition</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="tree-type" tabindex="-1">tree Type <a class="header-anchor" href="#tree-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced-properties-baum-daten.html">Baum Daten</a>)</p><h1 id="tree-properties" tabindex="-1">tree Properties <a class="header-anchor" href="#tree-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#species">species</a></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-tree-species.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/species">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#dbh">dbh</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-diameter-at-breast-height.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/dbh">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#height">height</a></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-height.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/height">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#trunk">trunk</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-trunk.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#crown">crown</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-crown.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/crown">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#birth">birth</a></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">can be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten-properties-birthday.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/birth">Baumkontrolle</a></td></tr></tbody></table><h2 id="species" tabindex="-1">species <a class="header-anchor" href="#species" aria-hidden="true">#</a></h2><p>Tree Species values taken from <a href="https://github.com/b-lack/tree-species" target="_blank" rel="noreferrer">https://github.com/b-lack/tree-species</a></p><p><code>species</code></p><ul><li><p>is required</p></li><li><p>Type: <code>string</code> (<a href="./dereferenced-properties-baum-daten-properties-tree-species.html">Tree species</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-tree-species.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/species">Baumkontrolle</a></p></li></ul><h3 id="species-type" tabindex="-1">species Type <a class="header-anchor" href="#species-type" aria-hidden="true">#</a></h3><p><code>string</code> (<a href="./dereferenced-properties-baum-daten-properties-tree-species.html">Tree species</a>)</p><h3 id="species-constraints" tabindex="-1">species Constraints <a class="header-anchor" href="#species-constraints" aria-hidden="true">#</a></h3><p><strong>pattern</strong>: the string must match the following regular expression: </p><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">^[a-zA-Z0-9_-]{3}$</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p><a href="https://regexr.com/?expression=%5E%5Ba-zA-Z0-9_-%5D%7B3%7D%24" title="try regular expression with regexr.com" target="_blank" rel="noreferrer">try pattern</a></p><h3 id="species-examples" tabindex="-1">species Examples <a class="header-anchor" href="#species-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">JM2</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="dbh" tabindex="-1">dbh <a class="header-anchor" href="#dbh" aria-hidden="true">#</a></h2><p>Diameter in centimeter</p><p><code>dbh</code></p><ul><li><p>is required</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-baum-daten-properties-diameter-at-breast-height.html">Diameter at Breast Height</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-diameter-at-breast-height.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/dbh">Baumkontrolle</a></p></li></ul><h3 id="dbh-type" tabindex="-1">dbh Type <a class="header-anchor" href="#dbh-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-baum-daten-properties-diameter-at-breast-height.html">Diameter at Breast Height</a>)</p><h3 id="dbh-constraints" tabindex="-1">dbh Constraints <a class="header-anchor" href="#dbh-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>100</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>1</code></p><h3 id="dbh-examples" tabindex="-1">dbh Examples <a class="header-anchor" href="#dbh-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">34</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">56</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="height" tabindex="-1">height <a class="header-anchor" href="#height" aria-hidden="true">#</a></h2><p>Height in Meter</p><p><code>height</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>number</code> (<a href="./dereferenced-properties-baum-daten-properties-height.html">Height</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-height.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/height">Baumkontrolle</a></p></li></ul><h3 id="height-type" tabindex="-1">height Type <a class="header-anchor" href="#height-type" aria-hidden="true">#</a></h3><p><code>number</code> (<a href="./dereferenced-properties-baum-daten-properties-height.html">Height</a>)</p><h3 id="height-constraints" tabindex="-1">height Constraints <a class="header-anchor" href="#height-constraints" aria-hidden="true">#</a></h3><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>99</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0.5</code></p><h3 id="height-examples" tabindex="-1">height Examples <a class="header-anchor" href="#height-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">14</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">13.5</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">15.6</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="trunk" tabindex="-1">trunk <a class="header-anchor" href="#trunk" aria-hidden="true">#</a></h2><p>Trunk definition</p><p><code>trunk</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-baum-daten-properties-trunk.html">Trunk</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-trunk.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/trunk">Baumkontrolle</a></p></li></ul><h3 id="trunk-type" tabindex="-1">trunk Type <a class="header-anchor" href="#trunk-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-baum-daten-properties-trunk.html">Trunk</a>)</p><h2 id="crown" tabindex="-1">crown <a class="header-anchor" href="#crown" aria-hidden="true">#</a></h2><p>Crown definition</p><p><code>crown</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-baum-daten-properties-crown.html">Crown</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-crown.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/crown">Baumkontrolle</a></p></li></ul><h3 id="crown-type" tabindex="-1">crown Type <a class="header-anchor" href="#crown-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-baum-daten-properties-crown.html">Crown</a>)</p><h2 id="birth" tabindex="-1">birth <a class="header-anchor" href="#birth" aria-hidden="true">#</a></h2><p>Birthday of the tree</p><p><code>birth</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>string</code> (<a href="./dereferenced-properties-baum-daten-properties-birthday.html">Birthday</a>)</p></li><li><p>can be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten-properties-birthday.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree/properties/birth">Baumkontrolle</a></p></li></ul><h3 id="birth-type" tabindex="-1">birth Type <a class="header-anchor" href="#birth-type" aria-hidden="true">#</a></h3><p><code>string</code> (<a href="./dereferenced-properties-baum-daten-properties-birthday.html">Birthday</a>)</p><h3 id="birth-constraints" tabindex="-1">birth Constraints <a class="header-anchor" href="#birth-constraints" aria-hidden="true">#</a></h3><p><strong>date</strong>: the string must be a date string, according to <a href="https://tools.ietf.org/html/rfc3339" title="check the specification" target="_blank" rel="noreferrer">RFC 3339, section 5.6</a></p><h3 id="birth-examples" tabindex="-1">birth Examples <a class="header-anchor" href="#birth-examples" aria-hidden="true">#</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">2010-09-13</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,69),i=[a];function l(p,d,o,h,c,u){return t(),s("div",null,i)}const f=e(n,[["render",l]]);export{m as __pageData,f as default};
