import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2 pb-4'>About of
        <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Saleh Mahmud
        </span>
        </h3>
        <p className='text-para'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, neque quas voluptatem aliquid officiis sunt nobis reprehenderit adipisci, animi iure assumenda impedit iste minus vitae cumque expedita laborum nulla iusto porro aut distinctio natus magnam excepturi. Laboriosam, illo culpa maxime odit at eaque? Voluptatum molestias beatae ex! Laborum, at impedit?
        </p>
      </div>


        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                Education
            </h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("09-13-2014")} - {formateDate("09-04-2016")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            Neelam Hospital, Near Rajpura
                        </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>{formateDate("07-04-2010")} - {formateDate("09-04-2014")}</span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            Neelam Hospital, Near Rajpura
                        </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
                Experience
            </h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md-p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("09-13-2014")} - {formateDate("09-04-2016")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                    </p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Neelam Hospital
                    </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                    {formateDate("09-13-2014")} - {formateDate("09-04-2016")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                    </p>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Neelam Hospital
                    </p>
                </li>
            </ul>
        </div>

    </div>
  )
}

export default DoctorAbout
