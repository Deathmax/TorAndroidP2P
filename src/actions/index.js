/*
 * Copyright 2017 Jun Siang Cheah
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

export const addTodo = (id, listId, title, starred) => ({
    type: 'ADD_TODO',
    id,
    listId,
    title,
    starred,
    created_at: Date.now()
})

export const toggleCompleteTodo = (id, listId) => ({
    type: 'TOGGLE_COMPLETE_TODO',
    id,
    listId,
    time: Date.now()
})

export const toggleStarredTodo = (id, listId) => ({
    type: 'TOGGLE_STARRED_TODO',
    id,
    listId,
    time: Date.now()
})

export const modifyTodo = (id, listId, title) => ({
    type: 'MODIFY_TODO',
    id,
    title,
    listId,
    time: Date.now()
})

export const deleteTodo = (id, listId) => ({
    type: 'DELETE_TODO',
    id,
    listId,
    time: Date.now()
})


export const addList = (id, title) => ({
    type: 'ADD_LIST',
    id,
    title,
    created_at: Date.now()
})

export const addExistingList = (list) => ({
    type: 'ADD_EXISTING_LIST',
    list
})

export const deleteList = (id) => ({
    type: 'DELETE_LIST',
    id
})

export const modifyList = (id, title) => ({
    type: 'MODIFY_LIST',
    id, 
    title,
    time: Date.now()
})

export const replaceList = (id, list) => ({
    type: 'REPLACE_LIST',
    id,
    list
})

export const setName = (name) => ({
    type: 'SET_NAME',
    name
})

export const addContact = (name, onion) => ({
    type: 'ADD_CONTACT',
    name,
    onion
})

export const deleteContact = (onion) => ({
    type: 'DELETE_CONTACT',
    onion
})

export const addPeer = (name, onion, listId) => ({
    type: 'ADD_PEER',
    name,
    onion,
    listId,
    time: Date.now()
})