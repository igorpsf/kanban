import {useMemo} from 'react';

const useSearch = (searchQuery, tasks) => {
    const searchedTasks = useMemo( () => {
        if(searchQuery === ''){
            return tasks
        }
        const newTasks = tasks.filter(task => task.name.toLowerCase().includes(searchQuery.toLowerCase()))
        return newTasks
    }, [searchQuery, tasks])

    return searchedTasks
};

export { useSearch };