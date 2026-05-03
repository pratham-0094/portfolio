import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule, NgFor, NgIf],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
})
export class ProjectsComponent {
  @ViewChild('slidesContainer', { static: true }) slidesContainer!: ElementRef;

  activeIndex: number | null = null;

  moreProjects = [
    {
      name: 'Devstash',
      type: 'Group',
      description: 'A Flutter-based mobile application that allows users to create profiles and showcase their projects by adding titles, descriptions, and links, similar to a developer-focused Linktree. Implemented secure user authentication and profile management to enable personalized access and easy editing of project information. Integrated Firebase as the backend for authentication and real-time data storage, ensuring reliable data synchronization and smooth app performance. The app provides a simple and efficient platform for developers to organize and share their personal projects through a mobile interface.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/pratham-0094/devstash-flutter',
        }
      ]
    },
    {
      name: 'RahoBharat',
      type: 'Group',
      description: 'A Flutter-based mobile application designed to help students find affordable rooms, hostels, and shared accommodations near their colleges. The app allows users to browse available listings, view details such as rent, location, and amenities, and connect with property owners or roommates. Features include room-sharing options, user-friendly search and filtering, and profile-based interactions to simplify the housing search process. The project focused on creating a simple and accessible platform to address the common challenge students face when searching for accommodation in a new city.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/prakhar-5447/rahobharat',
        }
      ]
    },
    {
      name: 'Caderneta AAC',
      description: 'A Discord bot for a Portuguese client that implements a virtual card collection game within a Discord server. The bot allows users to collect digital cards daily and gradually complete their collection, encouraging regular engagement and community interaction. It manages user inventories, card distribution logic, and collection tracking through automated commands.“caderneta” in Portuguese generally means “small notebook”, “booklet”, or “collection book.”',
      links: [
        {
          label: "Github",
          url: 'https://github.com/prakhar-5447/caderneta-aac',
        }
      ]
    },
    {
      name: 'React Native API Apps Suite',
      description: 'A collection of React Native applications built around real-world API integrations. Includes projects like Meal app, Todo app, and DevStash mobile version, focusing on data fetching, state management, and responsive mobile UI.',
      links: [
        {
          label: 'GitHub (All Projects)',
          url: 'https://github.com/pratham-0094/React-Native-Apps'
        },
        {
          label: 'GitHub (Devstash React Native)',
          url: 'https://github.com/pratham-0094/INO'
        }
      ]
    },
    {
      name: 'Uber Data Analysis',
      type: 'Group',
      description: 'As part of my final-year group project, I worked on analyzing ride-sharing trip data to identify patterns in ride demand, trip distribution, and usage trends. The project involved data preprocessing, cleaning large CSV datasets, and performing exploratory data analysis using Python libraries such as Pandas, NumPy, Matplotlib, and Seaborn. We generated visualizations to understand peak usage times, trip frequency, and location-based demand patterns. This project helped us derive insights from large datasets and strengthened our understanding of data analysis and visualization techniques.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/ShubhamMohanty680/Uber_Data_Analysis',
        }
      ]
    },
    {
      name: 'Sensor Fault Detection',
      type: 'Group',
      description: 'As part of a group project during my B.Tech, we developed a machine learning system to detect faults in vehicle Air Pressure System (APS) sensors using industrial sensor data. The project involved building an ML pipeline with data preprocessing, feature engineering, and training classification models. My main contribution was developing the web interface for interacting with the model and handling Docker-based containerization for deployment, enabling a portable and reproducible application environment.',
      links: [
        {
          label: "Github",
          url: 'https://github.com/ShubhamMohanty680/Sensor_Fault_Detection',
        }
      ]
    },
    {
      name: 'UI/UX Design (Figma)',
      project_type: 'Collaborative Work',
      description: 'A collection of UI/UX designs created in Figma, including full web and Android app interfaces. Focused on layout systems, user flows, consistency, and modern design patterns to create intuitive and scalable user experiences. Includes design explorations as well as interfaces for projects mentioned above, showcasing the transition from concept to implementation.',
      links: [
        {
          label: 'View Web Designs',
          url: 'https://www.figma.com/design/00Ash95cQKgoKdPqSp9Li3/projects-web?node-id=0-1&t=l8SxhFOf8WCZGyQN-1'
        },
        {
          label: 'View Android Designs',
          url: 'https://www.figma.com/design/Qg8OrgR2RTo4KHEXrjzviO/projects-android?node-id=0-1&t=Eq5nZzg3KOFzCFWa-1'
        }
      ]
    }, {
      name: 'Visual & Motion Design',
      type: 'Collaborative Work',
      description: 'A collection of creative work including Photoshop, Illustrator, and After Effects projects. Covers social media creatives, posters, branding explorations, and motion design, showcasing skills in visual storytelling, composition, and design tools.',
      links: [
        {
          label: 'Instagram Portfolio',
          url: 'https://instagram.com/pixel8cloud'
        }
      ]
    }
  ];

  toggleAccordion(index: number) {
    this.activeIndex = this.activeIndex === index ? null : index;
  }

  scroll() {
    const container = this.slidesContainer.nativeElement;
    const slideWidth = container.querySelector('.slide').clientWidth;
    const scrollAmount = slideWidth;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
      container.scrollTo({
        left: 0,
        behavior: 'smooth'
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  }
}