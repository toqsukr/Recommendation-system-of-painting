import { useState, React, useEffect } from 'react'
import { HeadCltn } from '../Header/HeadCltn/HeadCltn';
import { Gallery } from '../Gallery/Gallery';
import { NotFound } from '../NotFound/NotFound';
import { SwitchBar } from '../SwitchBar/SwitchBar';
import { Loading } from '../Loading/Loading';
export const Controle = ({ data }) => {
const [content, setContent] = useState(null)
const [fullGallery, setFullGallery] = useState(null)
const [page, setPage] = useState(0);
const [first, setFirst] = useState(false)
const [loading, setLoading] = useState(true)


useEffect(() => {
  setTimeout(() => setFirst(true), 800)
}, [])

useEffect(() => {
  if(first)
  {
    setTimeout(async () => {
      setFullGallery(data)
      setContent(data)
    }, 1000)
    setFirst(false)
  }
})

const updateContent = (p) => setContent(p)
const updatePage = (p) => setPage(p)
const updateFullGallery = (p) => setFullGallery(p)
const updateLoading = (p) => setLoading(p)

  return (
    <>
        <HeadCltn
            loading={loading}
            fullGallery={fullGallery}
            updateContent={updateContent}
            content={content}
            updatePage={updatePage}
        />
        <div>
        {content ? (content.length ? (
            <Gallery loading={loading} updateLoading={updateLoading} updateFullGallery={updateFullGallery} fullContent={fullGallery} updateContent={updateContent} updatePage={updatePage} content={content?.slice(page * 6, (page + 1) * 6)} />
        ) : (
            <NotFound />
        )) : (
          <Loading/>
        )}
        </div>
        <SwitchBar content={content} page={page} updatePage={updatePage} />
    </>
  )
}
