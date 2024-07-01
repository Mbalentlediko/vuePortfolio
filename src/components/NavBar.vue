<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">
                <img src="https://mbalentlediko.github.io/Images/static/md logo.jpg" alt="logo" class="img-fluid"
                    loading="lazy">
            </router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link active" aria-current="page" to="/" > <i class="bi bi-house-door-fill"></i>Home</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about"> <i class="bi bi-file-person-fill"></i>About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#education"> <i class="bi bi-backpack4-fill"></i>Education</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#resume"> <i class="bi bi-file-earmark-person"></i>Resume</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#project"> Project</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#testimonials">Testimonials</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#reachMe"><i class="bi bi-telephone"></i>Reach me</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  </template>