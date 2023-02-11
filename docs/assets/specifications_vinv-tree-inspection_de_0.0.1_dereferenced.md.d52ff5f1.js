import{_ as e,o as t,c as a,a as l}from"./app.0b826a0f.js";const m=JSON.parse('{"title":"Baumkontrolle Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"Baumkontrolle Type","slug":"baumkontrolle-type","link":"#baumkontrolle-type","children":[]},{"level":2,"title":"location","slug":"location","link":"#location","children":[{"level":3,"title":"location Type","slug":"location-type","link":"#location-type","children":[]}]},{"level":2,"title":"tree","slug":"tree","link":"#tree","children":[{"level":3,"title":"tree Type","slug":"tree-type","link":"#tree-type","children":[]}]},{"level":2,"title":"base_data","slug":"base-data","link":"#base-data","children":[{"level":3,"title":"base_data Type","slug":"base-data-type","link":"#base-data-type","children":[]}]},{"level":2,"title":"root","slug":"root","link":"#root","children":[{"level":3,"title":"root Type","slug":"root-type","link":"#root-type","children":[]}]},{"level":2,"title":"trunk","slug":"trunk","link":"#trunk","children":[{"level":3,"title":"trunk Type","slug":"trunk-type","link":"#trunk-type","children":[]}]},{"level":2,"title":"crown","slug":"crown","link":"#crown","children":[{"level":3,"title":"crown Type","slug":"crown-type","link":"#crown-type","children":[]}]},{"level":2,"title":"action_required","slug":"action-required","link":"#action-required","children":[{"level":3,"title":"action_required Type","slug":"action-required-type","link":"#action-required-type","children":[]}]},{"level":2,"title":"status","slug":"status","link":"#status","children":[{"level":3,"title":"status Type","slug":"status-type","link":"#status-type","children":[]}]}],"relativePath":"specifications/vinv-tree-inspection/de/0.0.1/dereferenced.md","lastUpdated":1676136648000}'),r={name:"specifications/vinv-tree-inspection/de/0.0.1/dereferenced.md"},n=l(`<h1 id="baumkontrolle-schema" tabindex="-1">Baumkontrolle Schema <a class="header-anchor" href="#baumkontrolle-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>Baumkontrolle nach Vorgaben der Bundesanstalt f\xFCr Gew\xE4sserkunde (bfa)</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">No</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../../../vinv-schemas/vinv-tree/out/0.0.1/dereferenced.doc.json" title="open original schema">dereferenced.doc.json</a></td></tr></tbody></table><h2 id="baumkontrolle-type" tabindex="-1">Baumkontrolle Type <a class="header-anchor" href="#baumkontrolle-type" aria-hidden="true">#</a></h2><p><code>object</code> (<a href="./dereferenced.html">Baumkontrolle</a>)</p><h1 id="baumkontrolle-properties" tabindex="-1">Baumkontrolle Properties <a class="header-anchor" href="#baumkontrolle-properties" aria-hidden="true">#</a></h1><table><thead><tr><th style="text-align:left;">Property</th><th style="text-align:left;">Type</th><th style="text-align:left;">Required</th><th style="text-align:left;">Nullable</th><th style="text-align:left;">Defined by</th></tr></thead><tbody><tr><td style="text-align:left;"><a href="#location">location</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-location.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/location">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#tree">tree</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-baum-daten.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#base_data">base_data</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Required</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-grunddaten.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/base_data">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#root">root</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-wurzel.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#trunk">trunk</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-stammfu\xDF-und-stamm-.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#crown">crown</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-stamm.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/crown">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#action_required">action_required</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-handlungsbedarf.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/action_required">Baumkontrolle</a></td></tr><tr><td style="text-align:left;"><a href="#status">status</a></td><td style="text-align:left;"><code>object</code></td><td style="text-align:left;">Optional</td><td style="text-align:left;">cannot be null</td><td style="text-align:left;"><a href="./dereferenced-properties-zustand.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/status">Baumkontrolle</a></td></tr></tbody></table><h2 id="location" tabindex="-1">location <a class="header-anchor" href="#location" aria-hidden="true">#</a></h2><p><code>location</code></p><ul><li><p>is required</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-location.html">Location</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-location.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/location">Baumkontrolle</a></p></li></ul><h3 id="location-type" tabindex="-1">location Type <a class="header-anchor" href="#location-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-location.html">Location</a>)</p><h2 id="tree" tabindex="-1">tree <a class="header-anchor" href="#tree" aria-hidden="true">#</a></h2><p>Tree definition</p><p><code>tree</code></p><ul><li><p>is required</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-baum-daten.html">Baum Daten</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-baum-daten.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/tree">Baumkontrolle</a></p></li></ul><h3 id="tree-type" tabindex="-1">tree Type <a class="header-anchor" href="#tree-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-baum-daten.html">Baum Daten</a>)</p><h2 id="base-data" tabindex="-1">base_data <a class="header-anchor" href="#base-data" aria-hidden="true">#</a></h2><p><code>base_data</code></p><ul><li><p>is required</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-grunddaten.html">Grunddaten</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-grunddaten.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/base_data">Baumkontrolle</a></p></li></ul><h3 id="base-data-type" tabindex="-1">base_data Type <a class="header-anchor" href="#base-data-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-grunddaten.html">Grunddaten</a>)</p><h2 id="root" tabindex="-1">root <a class="header-anchor" href="#root" aria-hidden="true">#</a></h2><p>Root of the tree.</p><p><code>root</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-wurzel.html">Wurzel</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-wurzel.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/root">Baumkontrolle</a></p></li></ul><h3 id="root-type" tabindex="-1">root Type <a class="header-anchor" href="#root-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-wurzel.html">Wurzel</a>)</p><h2 id="trunk" tabindex="-1">trunk <a class="header-anchor" href="#trunk" aria-hidden="true">#</a></h2><p>trunk foot and trunk</p><p><code>trunk</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-stammfu\xDF-und-stamm-.html">Stammfu\xDF und Stamm </a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-stammfu\xDF-und-stamm-.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/trunk">Baumkontrolle</a></p></li></ul><h3 id="trunk-type" tabindex="-1">trunk Type <a class="header-anchor" href="#trunk-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-stammfu\xDF-und-stamm-.html">Stammfu\xDF und Stamm </a>)</p><h2 id="crown" tabindex="-1">crown <a class="header-anchor" href="#crown" aria-hidden="true">#</a></h2><p>Stammfu\xDF und Stamm</p><p><code>crown</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-stamm.html">Stamm</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-stamm.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/crown">Baumkontrolle</a></p></li></ul><h3 id="crown-type" tabindex="-1">crown Type <a class="header-anchor" href="#crown-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-stamm.html">Stamm</a>)</p><h2 id="action-required" tabindex="-1">action_required <a class="header-anchor" href="#action-required" aria-hidden="true">#</a></h2><p><code>action_required</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-handlungsbedarf.html">Handlungsbedarf</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-handlungsbedarf.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/action_required">Baumkontrolle</a></p></li></ul><h3 id="action-required-type" tabindex="-1">action_required Type <a class="header-anchor" href="#action-required-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-handlungsbedarf.html">Handlungsbedarf</a>)</p><h2 id="status" tabindex="-1">status <a class="header-anchor" href="#status" aria-hidden="true">#</a></h2><p><code>status</code></p><ul><li><p>is optional</p></li><li><p>Type: <code>object</code> (<a href="./dereferenced-properties-zustand.html">Zustand</a>)</p></li><li><p>cannot be null</p></li><li><p>defined in: <a href="./dereferenced-properties-zustand.html" title="https://schema.vinv.io/vinv-tree-inspection/de/0.0.1.json#/properties/status">Baumkontrolle</a></p></li></ul><h3 id="status-type" tabindex="-1">status Type <a class="header-anchor" href="#status-type" aria-hidden="true">#</a></h3><p><code>object</code> (<a href="./dereferenced-properties-zustand.html">Zustand</a>)</p>`,52),i=[n];function d(o,s,p,c,h,u){return t(),a("div",null,i)}const y=e(r,[["render",d]]);export{m as __pageData,y as default};