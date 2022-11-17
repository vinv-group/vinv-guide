import{_ as e,c as a,o as t,a as s}from"./app.939b5bfd.js";const m=JSON.parse('{"title":"Accuracy Schema","description":"","frontmatter":{},"headers":[{"level":2,"title":"accuracy Type","slug":"accuracy-type","link":"#accuracy-type","children":[]},{"level":2,"title":"accuracy Constraints","slug":"accuracy-constraints","link":"#accuracy-constraints","children":[]},{"level":2,"title":"accuracy Examples","slug":"accuracy-examples","link":"#accuracy-examples","children":[]}],"relativePath":"basics/location/0.0.1/dereferenced-properties-accuracy.md","lastUpdated":null}'),c={name:"basics/location/0.0.1/dereferenced-properties-accuracy.md"},n=s(`<h1 id="accuracy-schema" tabindex="-1">Accuracy Schema <a class="header-anchor" href="#accuracy-schema" aria-hidden="true">#</a></h1><div class="language-txt line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki"><code><span class="line"><span style="color:#d8dee9ff;">https://schema.vinv.io/location/0.0.1.json#/properties/accuracy</span></span>
<span class="line"><span style="color:#d8dee9ff;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>The decimal accuracy of coordinates in meter (2 decimal places max).</p><table><thead><tr><th style="text-align:left;">Abstract</th><th style="text-align:left;">Extensible</th><th style="text-align:left;">Status</th><th style="text-align:left;">Identifiable</th><th style="text-align:left;">Custom Properties</th><th style="text-align:left;">Additional Properties</th><th style="text-align:left;">Access Restrictions</th><th style="text-align:left;">Defined In</th></tr></thead><tbody><tr><td style="text-align:left;">Can be instantiated</td><td style="text-align:left;">No</td><td style="text-align:left;">Unknown status</td><td style="text-align:left;">Unknown identifiability</td><td style="text-align:left;">Forbidden</td><td style="text-align:left;">Allowed</td><td style="text-align:left;">none</td><td style="text-align:left;"><a href="../../../../vinv-schemas/vinv-tree/out/dereferenced.doc.json" title="open original schema">dereferenced.doc.json*</a></td></tr></tbody></table><h2 id="accuracy-type" tabindex="-1">accuracy Type <a class="header-anchor" href="#accuracy-type" aria-hidden="true">#</a></h2><p><code>number</code> (<a href="./dereferenced-properties-accuracy.html">Accuracy</a>)</p><h2 id="accuracy-constraints" tabindex="-1">accuracy Constraints <a class="header-anchor" href="#accuracy-constraints" aria-hidden="true">#</a></h2><p><strong>multiple of</strong>: the value of this number must be a multiple of: <code>0.1</code></p><p><strong>maximum</strong>: the value of this number must smaller than or equal to: <code>10000</code></p><p><strong>minimum</strong>: the value of this number must greater than or equal to: <code>0</code></p><h2 id="accuracy-examples" tabindex="-1">accuracy Examples <a class="header-anchor" href="#accuracy-examples" aria-hidden="true">#</a></h2><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">3</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki"><code><span class="line"><span style="color:#B48EAD;">12</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,13),l=[n];function r(i,o,d,p,u,h){return t(),a("div",null,l)}const f=e(c,[["render",r]]);export{m as __pageData,f as default};
