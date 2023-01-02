import { useState, React } from 'react'
import { HeadCltn } from '../Header/HeadCltn/HeadCltn';
import { Gallery } from '../Gallery/Gallery';
import { NotFound } from '../NotFound/NotFound';
import { SwitchBar } from '../SwitchBar/SwitchBar';
export const Controle = ({ data }) => {
const [content, setContent] = useState(data)
const [page, setPage] = useState(0);

const fullGallery = data
const updateContent = (p) => setContent(p)
const updatePage = (p) => setPage(p)

  return (
    <>
        <HeadCltn
            fullGallery={fullGallery}
            updateContent={updateContent}
            content={content}
            updatePage={updatePage}
        />
        <div>
        {content.length ? (
            <Gallery fullContent={fullGallery} updateContent={updateContent} updatePage={updatePage} content={content?.slice(page * 6, (page + 1) * 6)} />
        ) : (
            <NotFound />
        )}
        </div>
        <SwitchBar content={content} page={page} updatePage={updatePage} />
    </>
  )
}
