'use client'
import React, { useState } from 'react'
import PostList from '@/components/PostList';
import { CategoryTypes, PostTypes } from '@/types';
import { ChevronDown } from 'lucide-react';

type Props = {
  posts: PostTypes[],
  categories: CategoryTypes[]
}


const ClientAllPosts = ({ posts, categories }: Props) => {

  const [showAllCategories, setShowAllCategories] = useState(false);
  const displayedCategories = showAllCategories ? categories : categories.slice(0, 3);
  const [selectedCategory, setSelectedCategory] = useState<CategoryTypes | null>(null);

  const handleCategoryClick = (category: CategoryTypes) => {
    setSelectedCategory(category);
  };

  const clearSelectedCategory = () => {
    setSelectedCategory(null);
  };

  const filteredPosts = selectedCategory
    ? posts.filter(post => post.categories.some(category => category.title === selectedCategory?.title))
    : posts;

  return (
    <div>
      <div className='mt-5 flex flex-wrap max-w-lg w-full gap-3 justify-center items-center mx-auto'>
        <div onClick={() => clearSelectedCategory()} className={`bg-accent/70 rounded-full px-5 py-1 text-foreground border hover:bg-foreground hover:text-background hover:border-background cursor-pointer ${!selectedCategory ? 'border-background bg-foreground text-background' : ''
          }`}>
          All
        </div>
        {displayedCategories.map((category, index) => (
          <div onClick={() => handleCategoryClick(category)} key={index} className={`bg-accent/70 rounded-full px-5 py-1 text-muted-foreground border hover:bg-foreground hover:border-background hover:text-background cursor-pointer ${selectedCategory && selectedCategory.title === category.title ? 'border-background bg-foreground text-background' : ''
            }`}>
            {category.title}
          </div>
        ))}
        {categories.length > 3 && (
          <button
            onClick={() => setShowAllCategories(!showAllCategories)}
            className='text-muted-foreground cursor-pointer flex gap-2 items-center'
          >
            <ChevronDown size={15} className={`transform ${showAllCategories ? 'rotate-180 transition' : ''}`} />
            {showAllCategories ? 'Show less' : 'Show all'}
          </button>
        )}
      </div>
      {filteredPosts.map((post, index) => (
        <PostList key={index} post={post} />
      ))}
    </div>
  )
}

export default ClientAllPosts