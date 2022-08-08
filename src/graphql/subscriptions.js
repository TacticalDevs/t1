/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      username
      email
      imageUri
      posts {
        items {
          id
          videoUri
          description
          createdAt
          updatedAt
          userPostsId
          postSongId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
      id
      videoUri
      description
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
      id
      videoUri
      description
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
      id
      videoUri
      description
      user {
        id
        username
        email
        imageUri
        posts {
          nextToken
        }
        createdAt
        updatedAt
      }
      song {
        id
        name
        imageUri
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
      userPostsId
      postSongId
    }
  }
`;
export const onCreateSong = /* GraphQL */ `
  subscription OnCreateSong($filter: ModelSubscriptionSongFilterInput) {
    onCreateSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSong = /* GraphQL */ `
  subscription OnUpdateSong($filter: ModelSubscriptionSongFilterInput) {
    onUpdateSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSong = /* GraphQL */ `
  subscription OnDeleteSong($filter: ModelSubscriptionSongFilterInput) {
    onDeleteSong(filter: $filter) {
      id
      name
      imageUri
      createdAt
      updatedAt
    }
  }
`;
