import{_ as s,c as i,o as a,a2 as t}from"./chunks/framework.CY1b6e2z.js";const c=JSON.parse('{"title":"Formatting Timestamps","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"formatting-timestamps.md","filePath":"formatting-timestamps.md","lastUpdated":1709293730000}'),h={name:"formatting-timestamps.md"},n=t(`<h1 id="formatting-timestamps" tabindex="-1">Formatting Timestamps <a class="header-anchor" href="#formatting-timestamps" aria-label="Permalink to &quot;Formatting Timestamps&quot;">​</a></h1><h2 id="stamp" tabindex="-1">stamp() <a class="header-anchor" href="#stamp" aria-label="Permalink to &quot;stamp()&quot;">​</a></h2><p>Call the <code>stamp()</code> method to regenerate the timestamp as a string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-08-12 08:16:24</span></span></code></pre></div><p>The configuration options <code>joint</code>, <code>dateJoint</code> and <code>timeJoint</code> can be used to specify what strings are used to join the date and time (<code>joint</code>), components of the date (<code>dateJoint</code>) and components of the time (<code>timeJoint</code>).</p><p>These can be passed in as configuration options when you create the timestamp.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { dateJoint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, joint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;T&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022/08/12T08:16:24</span></span></code></pre></div><p>Or as options passed to the <code>stamp()</code> method.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ dateJoint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, joint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;T&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022/08/12T08:16:24</span></span></code></pre></div><h2 id="toString" tabindex="-1">toString() <a class="header-anchor" href="#toString" aria-label="Permalink to &quot;toString() {#toString}&quot;">​</a></h2><p>The <code>toString()</code> method is a wrapper around the <code>stamp()</code> method to auto-stringify a timestamp.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`Now: \${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);      </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Now: 2022-08-12 08:16:24</span></span></code></pre></div><h2 id="date" tabindex="-1">date() <a class="header-anchor" href="#date" aria-label="Permalink to &quot;date()&quot;">​</a></h2><p>Call the <code>date()</code> method to format the date as a string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022-08-12</span></span></code></pre></div><p>The method will use the <code>dateJoint</code> string to join components of the date. This can be specified as a configuration option when creating the timestamp:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { dateJoint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022/08/12</span></span></code></pre></div><p>Or passed as an argument to the <code>date()</code> method:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">date</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2022/08/12</span></span></code></pre></div><h2 id="time" tabindex="-1">time() <a class="header-anchor" href="#time" aria-label="Permalink to &quot;time()&quot;">​</a></h2><p>Call the <code>time()</code> method to format the time as a string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08:16:24</span></span></code></pre></div><p>The method will use the <code>timeJoint</code> string to join components of the time. This can be specified as a configuration option when creating the timestamp:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { timeJoint: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;::&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> });</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08::16::24</span></span></code></pre></div><p>Or passed as an argument to the <code>time()</code> method:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-12 08:16:24&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tm</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;::&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08::16::24</span></span></code></pre></div><h2 id="weekday" tabindex="-1">weekday() <a class="header-anchor" href="#weekday" aria-label="Permalink to &quot;weekday()&quot;">​</a></h2><p>The <code>weekday()</code> method returns the day of the week as an integer from 0 (Sunday) to 6 (Saturday).</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weekday</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1</span></span></code></pre></div><h2 id="weekdayName" tabindex="-1">weekdayName() <a class="header-anchor" href="#weekdayName" aria-label="Permalink to &quot;weekdayName() {#weekdayName}&quot;">​</a></h2><p>The <code>weekdayName()</code> method returns the day of the week as a string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weekdayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Monday</span></span></code></pre></div><p>An optional argument can be provided as a format. This defaults to <code>long</code> but can be set to <code>short</code> for a 3 letter abbreviation of the name.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weekdayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Mon</span></span></code></pre></div><p>The method will use the current local which defaults to <code>default</code> and will use the current locale for your browser or machine. You can specify a locale as a configuration option for the timestamp.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-08-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { locale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weekdayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lundi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">weekdayName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// lun.</span></span></code></pre></div><h2 id="monthName" tabindex="-1">monthName() <a class="header-anchor" href="#monthName" aria-label="Permalink to &quot;monthName() {#monthName}&quot;">​</a></h2><p>The <code>monthName()</code> method returns the day of the month as a string.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-09-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monthName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// September</span></span></code></pre></div><p>An optional argument can be provided as a format. This defaults to <code>long</code> but can be set to <code>short</code> for a 3 letter abbreviation of the month.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-09-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monthName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Sep</span></span></code></pre></div><p>The method will use the current local which defaults to <code>default</code> and will use the current locale for your browser or machine. You can specify a locale as a configuration option for the timestamp.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2022-09-15&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { locale: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;fr-FR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monthName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// septembre</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">monthName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;short&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// sep</span></span></code></pre></div><h2 id="formatting-shortcuts" tabindex="-1">Formatting Shortcuts <a class="header-anchor" href="#formatting-shortcuts" aria-label="Permalink to &quot;Formatting Shortcuts&quot;">​</a></h2><h3 id="kebab" tabindex="-1">Kebab Case <a class="header-anchor" href="#kebab" aria-label="Permalink to &quot;Kebab Case {#kebab}&quot;">​</a></h3><p>There are a number of shortcut methods for formatting the timestamp, date or time in various ways.</p><p>The <code>kebab</code> methods use &quot;kebab-case&quot; with elements separated by hyphens.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-03-07 08:17:25&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kebab</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-03-07-08-17-25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kebabDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023-03-07</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kebabTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08-17-25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">kebabDateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 20230307-081725</span></span></code></pre></div><h3 id="snake" tabindex="-1">Snake Case <a class="header-anchor" href="#snake" aria-label="Permalink to &quot;Snake Case {#snake}&quot;">​</a></h3><p>The <code>snake</code> methods use &quot;snake-case&quot; with elements separated by underscores.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-03-07 08:17:25&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snake</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();         </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023_03_07_08_17_25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snakeDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 2023_03_07</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snakeTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();     </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 08_17_25</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">snakeDateTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 20230307_081725</span></span></code></pre></div><h3 id="squish" tabindex="-1">Squish <a class="header-anchor" href="#squish" aria-label="Permalink to &quot;Squish {#squish}&quot;">​</a></h3><p>The <code>squish</code> methods squish elements together.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> timestamp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;2023-03-07 08:17:25&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">squish</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();        </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 20230307081725</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">squishDate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 20230307</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">squishTime</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 081725</span></span></code></pre></div>`,54),e=[n];function p(k,l,d,r,o,E){return a(),i("div",null,e)}const y=s(h,[["render",p]]);export{c as __pageData,y as default};