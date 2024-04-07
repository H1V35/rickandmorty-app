# Rick and Morty App

<div align="center">
  <video src="https://github.com/H1V35/rickandmorty-app/assets/58390134/304141f8-b709-48d8-8b57-1595df3ab79c" alt="Demo Video">
</div>

## 👽 Description

RickandMortyApp is a native Android and iOS application built with React Native and Expo using TypeScript. It showcases information related to the popular TV series Rick and Morty. The app includes several key screens:

- Episode List
- Location List
- Episode Detail Page
- Location Detail Page

The information for each entity is fetched from the endpoints of the [Rick and Morty API](https://rickandmortyapi.com/).

## 🧞 Requirements

The following requirements and guidelines were followed to achieve the functionality of the app:

- Utilize React Native with a router and navigator for page tabs, a store, and native components.
- Make API requests using Axios and TanStack Query.
- Implement a form that sends a POST request to the mock endpoint [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts).

## 📱 Screens

### Episode List

- Search functionality to find episodes by name.
- Asynchronously loading episode information in a paginated list. The list dynamically loads as the user scrolls vertically (infinite scroll).
- Redirects to the Episode Detail Page upon clicking an episode in the list.

### Episode Detail Page

- Display detailed information about the selected episode.
- Carousel showcasing characters from the episode.
- Form that submits the following information to the mock endpoint:
  - Name: Required field
  - Email: Required field
  - Comment: Required field, limited to a maximum of 500 characters

### Location List

- Search functionality to find locations by name.
- Asynchronously loading location information in a paginated list. The list dynamically loads as the user scrolls vertically (infinite scroll).
- Redirects to the Location Detail Page upon clicking a location in the list.

### Location Detail Page

- Display detailed information about the selected location.
- Carousel showcasing characters from the episode.

## 📚 Technologies Used

- React Native
- Expo
- TypeScript
- Axios
- TanStack Query

## 👨‍💻 Installation

To run the RickandMortyApp locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/H1V35/rickandmorty-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd rickandmorty-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the app for Android or iOS using Metro:
   ```bash
   npm start
   ```

## 🔍 Acknowledgements

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the data source.
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/posts) for the mock endpoint.
