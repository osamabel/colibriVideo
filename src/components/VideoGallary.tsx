
import Description from './Description'

function VideoGallary({item} : any) {
  return (
    <div  className="flex flex-col gap-y-[40px] border-b-[1px] border-black/5 py-[40px]">
        <Description
        title={item.title}
        desc={item.desc}
        />
        <div className="">0 video</div>
    </div>
  )
}

export default VideoGallary