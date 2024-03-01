import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.ClAFOfjZ.js";const y=JSON.parse('{"title":"Timestamp Components","description":"","frontmatter":{},"headers":[],"relativePath":"timestamp-components.md","filePath":"timestamp-components.md","lastUpdated":1709293730000}'),h={name:"timestamp-components.md"},n=t(`<h1 id="timestamp-components" tabindex="-1">Timestamp Components <a class="header-anchor" href="#timestamp-components" aria-label="Permalink to &quot;Timestamp Components&quot;">​</a></h1><h2 id="year" tabindex="-1">year() <a class="header-anchor" href="#year" aria-label="Permalink to &quot;year()&quot;">​</a></h2><p>Use the <code>year()</code> method to get or set the year.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">year</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">year</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2023</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">year</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-08-15</span></span></code></pre></div><h2 id="month" tabindex="-1">month() <a class="header-anchor" href="#month" aria-label="Permalink to &quot;month()&quot;">​</a></h2><p>Use the <code>month()</code> method to get or set the month. It should be an integer from 1 (January) to 12 (December).</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-09-15</span></span></code></pre></div><p>If you set the month to a value outside the range from 1 to 12 then the date will be adjusted accordingly. For example, setting the month to 13 will cause the year to be incremented and the month will be set to 1 (January).</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">13</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-01-15</span></span></code></pre></div><h2 id="day" tabindex="-1">day() <a class="header-anchor" href="#day" aria-label="Permalink to &quot;day()&quot;">​</a></h2><p>Use the <code>day()</code> method to get or set the day. It should be an integer from 1 to 31.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">month</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-09-15</span></span></code></pre></div><p>If you set the day to a value less than 1 or greater than the number of days in the month, then the date will be adjusted accordingly. For example, setting the day to 31 in June will result in the date being set to 1st July.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-06-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">day</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">31</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">day</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();       </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-07-01</span></span></code></pre></div><h2 id="hours" tabindex="-1">hours() <a class="header-anchor" href="#hours" aria-label="Permalink to &quot;hours()&quot;">​</a></h2><p>Use the <code>hours()</code> method to get or set the hours. It should be an integer from 0 to 23.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 8</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 9</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 09:13:12</span></span></code></pre></div><p>If you set the hours to a value outside the range 0 to 23 then then the time and date will be adjusted accordingly. For example, setting the hours to 25 on 30th June will result in the date being set to 1st July and the hours to 1.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-06-30 13:14:15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-07-01 01:14:15</span></span></code></pre></div><h2 id="minutes" tabindex="-1">minutes() <a class="header-anchor" href="#minutes" aria-label="Permalink to &quot;minutes()&quot;">​</a></h2><p>Use the <code>minutes()</code> method to get or set the minutes. It should be an integer from 0 to 59.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 13</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">14</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08:14:12</span></span></code></pre></div><p>If you set the minutes to a value outside the range 0 to 59 then then the time and date will be adjusted accordingly. For example, setting the minutes to 65 when the hour is 23 on 30th June will result in the date being set to 1st July and the hours to 0.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-06-30 23:14:15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">minutes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">hours</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-07-01 00:05:15</span></span></code></pre></div><h2 id="seconds" tabindex="-1">seconds() <a class="header-anchor" href="#seconds" aria-label="Permalink to &quot;seconds()&quot;">​</a></h2><p>Use the <code>seconds()</code> method to get or set the seconds. It should be an integer from 0 to 59.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15 08:13:12&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 12</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">22</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 22</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 14</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08:13:22</span></span></code></pre></div><p>If you set the seconds to a value outside the range 0 to 59 then then the time and date will be adjusted accordingly. For example, setting the seconds to 65 at 23:59:00 on 30th June will result in the date being set to 1st July and the time to 00:00:05.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-06-30 23:59:00&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">seconds</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-07-01 00:01:05</span></span></code></pre></div><h2 id="epochSeconds" tabindex="-1">epochSeconds() <a class="header-anchor" href="#epochSeconds" aria-label="Permalink to &quot;epochSeconds() {#epochSeconds}&quot;">​</a></h2><p>This method returns the number of seconds since the Unix Epoch at 00:00:00 on January 1st 1970.</p><h2 id="epochMilliseconds" tabindex="-1">epochMilliseconds() <a class="header-anchor" href="#epochMilliseconds" aria-label="Permalink to &quot;epochMilliseconds() {#epochMilliseconds}&quot;">​</a></h2><p>This method returns the number of milliseconds since the Unix Epoch at 00:00:00 on January 1st 1970.</p><h2 id="dateObject" tabindex="-1">dateObject() <a class="header-anchor" href="#dateObject" aria-label="Permalink to &quot;dateObject() {#dateObject}&quot;">​</a></h2><p>This method returns the timestamp as a Javascript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date" target="_blank" rel="noreferrer"><code>Date</code></a> object.</p>`,35),e=[n];function l(k,p,d,E,r,o){return a(),i("div",null,e)}const c=s(h,[["render",l]]);export{y as __pageData,c as default};
