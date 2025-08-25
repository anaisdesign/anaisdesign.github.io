---
layout: layouts/base.njk
title: Home
---

<section id="home" class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <h1>Designing with Purpose & Impact</h1>
            <p>{{ site.description }}</p>
            <a href="#projects" class="cta-button">View My Work</a>
        </div>
        <div class="hero-visual">
            <div class="floating-card">
                <div class="card-content">
                    <div class="card-line"></div>
                    <div class="card-line"></div>
                    <div class="card-line"></div>
                    <div class="card-line"></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="about" class="about">
    <div class="container">
        <h2 class="section-title fade-in">About Me</h2>
        <div class="about-content">
            <div class="about-image fade-in">👋</div>
            <div class="about-text fade-in">
                <h3>Hello, I'm Anaïs!</h3>
                <p>I am an aspiring [designer/developer/creative thinker] with a love for [design systems, user psychology, animation, etc.].</p>
                <p>I enjoy building clean and thoughtful experiences that solve real problems and make people feel good using digital products. When I'm not designing, I'm probably curating playlists, people-watching, or experimenting in Figma. </p>
                <div class="skills">
                    {% for skill in skills.all %}
                    <span class="skill-tag">{{ skill }}</span>
                    {% endfor %}
                </div>
            </div>
        </div>
    </div>
</section>

{% include "components/projects.njk" %}

<section id="contact" class="contact">
    <div class="container">
        <div class="contact-content fade-in">
            <h2>Let's Work Together</h2>
            <p>Ready to create something amazing? I'd love to hear about your project and discuss how we can bring your vision to life.</p>
            <div class="contact-links">
                <a href="mailto:{{ site.email }}" class="contact-link">Email Me</a>
                <a href="{{ site.url }}" class="contact-link">Portfolio Site</a>
                <a href="tel:{{ site.phone }}" class="contact-link">Call Me</a>
                <a href="https://linkedin.com/in/anaisfotsing" class="contact-link">LinkedIn</a>
            </div>
        </div>
    </div>
</section>