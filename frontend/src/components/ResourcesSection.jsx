import React, { useState, useEffect } from 'react';
import SectionHeading from './SectionHeading';
import LoadingState from './LoadingState';
import { getResources } from '../api/services';
import { BookOpen, Video, FileText, Newspaper, TrendingUp, ArrowUpRight, Tag } from 'lucide-react';

const categories = ['All', 'Case Studies', 'Guides', 'Articles', 'Videos', 'Updates'];

const getCategoryIcon = (cat) => {
  switch (cat) {
    case 'Case Studies': return TrendingUp;
    case 'Guides': return BookOpen;
    case 'Videos': return Video;
    case 'Articles': return FileText;
    default: return Newspaper;
  }
};

const ResourcesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResourcesData = async () => {
      setLoading(true);
      try {
        const response = await getResources(activeCategory);
        if (response?.data) {
          setResources(response.data);
        }
      } catch (err) {
        console.error('Failed to load resources', err);
      } finally {
        setLoading(false);
      }
    };

    fetchResourcesData();
  }, [activeCategory]);

  return (
    <section id="resources" className="py-20 md:py-28 bg-ivory text-ink relative border-b border-kasavu/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          kicker="KNOWLEDGE HUB & SUCCESS STORIES"
          title="Resources, Case Studies & Insights"
          subtitle="Explore real Kerala business transformations, playbooks, and AI sales strategy updates."
          theme="light"
          className="mb-10"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-sans font-medium rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-backwater text-kasavu shadow-md ring-1 ring-kasavu border-kasavu'
                  : 'bg-white text-ink-soft hover:bg-ivory-dim border border-kasavu/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Resource Cards Grid */}
        {loading ? (
          <LoadingState text="Fetching AI Engine Insights & Case Studies..." />
        ) : resources.length === 0 ? (
          <div className="text-center py-12 text-ink-soft font-sans">
            No resources found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((item) => {
              const IconComp = getCategoryIcon(item.category);
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-kasavu/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Metadata */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase px-2.5 py-1 rounded bg-palm/10 text-palm border border-palm/20">
                        <IconComp className="w-3.5 h-3.5" />
                        {item.category}
                      </span>
                      <span className="text-xs font-mono text-ink-soft/70">
                        {item.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-serif font-bold text-backwater mb-3 group-hover:text-kasavu transition-colors line-clamp-2">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs sm:text-sm font-sans text-ink-soft mb-6 leading-relaxed line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags?.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-ink-soft bg-ivory-dim px-2 py-0.5 rounded">
                          #{t}
                        </span>
                      ))}
                    </div>

                    {/* Card Footer */}
                    <div className="pt-4 border-t border-kasavu/10 flex items-center justify-between text-xs font-sans text-ink-soft">
                      <span>{item.author}</span>
                      <span className="font-semibold text-kasavu group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Read Story <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};

export default ResourcesSection;
