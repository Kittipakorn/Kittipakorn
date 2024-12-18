import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogKMITL() {
    return (
        <div className='font-sarabun'>
            <Navbar />
            <div className='flex flex-col mx-5 xl:mx-80 lg:mx-40 md:mx-20 py-10 gap-5'>
                <h1 className='font-bold text-3xl pt-4'>รีวิวสัมภาษณ์ วิศวะคอม มหิดล #dek68</h1>
                <p className='text-sm pb-2'>แก้ไขล่าสุด 12 พ.ย. 2567</p>
                <p className='text-lg'>อันนี้สมัครมาในรอบ 1/1 Portfolio เลย จริงๆเปิดรับตั้งแต่ 1 - 16 ต.ค. แต่ว่ารอบนี้ไม่ค่อยรีบยื่นเพราะรอแข่ง Thailand Cyber Top Talent 2024 อยู่ หลังจากแข่งเสร็จถึงได้ยื่นเพราะจะเอาผลงานใส่พอร์ตด้วย น่าจะยื่นประมาณวันที่ 14 ต.ค. เอกสารก็ค่อนข้างเยอะนิดนึง มีใช้ใบตรวจสุขภาพจากรพ. ใบรับรองคะแนน ฯลฯ แต่ก็เตรียมจนครบ</p>
                <p className='text-lg'>แล้วก็ประกาศสัมภาษณ์วันที่ 31 ต.ค. สัมภาษณ์วันที่ 3 พ.ย. แบบออนไซต์ และใช่ครับ ต้องเดินทางวันที่ 1 เพราะต้องไปสัมสจล.ด้วย ก็เลยรีบเตรียมเอกสารแบบด่วนมาก เอกสารค่อนข้างเยอะเลย พอเย็นวันที่ 1 ก็เดินทางเลย</p>
                <p className='text-lg'>* ใครยังไม่อ่านสัมภาษณ์ สจล. สามารถอ่านรีวิวสัมภาษณ์ก่อนได้เลยพอดี timeline มันต่อกัน <Link href='/blog/kmitl' className='mx-2 text-blue-600'>คลิกตรงนี้</Link>
                    หลังจากสัมภาษณ์ สจล.เสร็จ ก็เดินทางไปบ้านลุงที่นครปฐมต่อเลย จนตอนเช้าลุงก็ขับรถไปส่งที่ตึกวิศวะเลย</p>
                <p className='text-lg'>พอไปถึงก็เจอนักเรียนเยอะมาก เลยไปดูใบรายชื่อ วิศวะคอมเรียก 80 คน รับ 30 คน ซึ่งเราได้สัมภาษณ์ห้องแรกเป็นลำดับที่ 2 เพราะชื่อขึ้นต้น ก.ไก่</p>
                <p className='text-lg'>สักพักพี่เขาก็ให้เข้าแถวลงทะเบียน แล้วก็พาเดินไปแยกสาขา สาขาคอมได้ไปสัมภาษณ์ที่ตึกแดง ระหว่างเดินไปก็กระโดดลูบป้ายวิศวะไป 1 รอบ นั่งรอหน้าห้องสัมภาษณ์สักพักก็เรียกลงชื่อสัมภาษณ์ สรุปเอกสารมากมายที่เตรียมมาไม่ได้ใช้ใช้แค่พอร์ต พอถึงคิวก็เดินเข้าไปห้องสัมภาษณ์</p>
                <div>
                    <Image alt='' src="https://i.ibb.co/Kj0WdLK/mu.jpg" width={2000} height={2000}/>
                    <p className='text-center pt-2 text-gray-600 text-sm'>อันนี้เป็นป้ายที่กระโดดลูบไป 1 ที</p>
                </div>
                
                <p className='text-lg'>ในห้องก็มีอาจารย์ 2 ท่าน เป็นผู้ชายกับผู้หญิง เราก็เดินเข้าไปแล้วยื่นพอร์ตให้อาจารย์แล้วก็นั่งที่เก้าอี้
                    อาจารย์ผญก็เชิญแนะนำตัว ก็แนะนำตัวไปปกติเลย</p>
                <div className='flex flex-col gap-3 text-lg'>
                    <p className='text-right ml-16'>ชื่อนาย xxx ชื่อเล่น xxx มาจากโรงเรียนเบ็ญจะมะมหาราช จังหวัดอุบลราชธานี วันนี้มาสัมภาษณ์วิศวะคอม มหิดลครับ:</p>
                    <p>อจผญ: ทำไมถึงอยากเข้าที่นี่</p>
                    <p className='text-right ml-16'>เคยมาค่าย clickcamp เลยชอบบรรยากาศของที่นี่ แล้วก็ชอบหลักสูตรของที่นี่ที่มีสาย cyber security:</p>
                    <p>อจผช: ถ้าได้ที่นี่จะเอามั้ย</p>
                    <p className='text-right ml-16'>เอาครับ!(ตอบแบบไม่คิด):</p>
                    <p>อจผญ: เห็นมีสอวน.ด้วยนิ แล้วก็ถามว่าค่ายอะไรเป็นแบบไหน เรียนอะไรบ้าง</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>ก็อธิบายเกี่ยวกับค่ายแล้วก็บอกว่าเรียน data structure and algorithm</p>
                    <p>อจผญ: data structure ที่เรียนมีอะไรบ้าง เขียนภาษาอะไร</p>
                    <p className='text-right ml-16'>List queue stack tree graph ใช้ C++ครับ:</p>
                    <p>แล้วอาจารย์ก็ถามว่าเคยทำโปรเจคอะไรมั้ย</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>ก็อธิบายโปรเจคที่เคยทำไป</p>
                    <p>อจผช: ถ้าเรียนที่นี่จะพักที่ไหน</p>
                    <p className='text-right ml-16'>อาจจะอยู่หอครับ เป็นเด็กต่างจังหวัดแต่มีลุงอยู่ที่นี่พอดีเวลามีปัญหาอะไรก็ติดต่อญาติได้ง่ายเลยอยากเรียนที่นี่:</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>อาจารย์ก็ถามว่าบ้านอยู่ที่ไหน ลุงขับรถมาส่งหรออะไรแบบนี้</p>
                    <p>อจผช: ขออนุญาตถามได้มั้ยว่ายื่นที่ไหนบ้าง</p>
                    <p className='text-right ml-16'>ยื่นลาดกระบังครับ ที่ดูไว้อีกก็มี เกษตร กับ บางมด แต่เขาเปิดรับหลังจากที่ที่นี่ประกาศแล้วเลยจะรอประกาศก่อน ถ้าติดก็ไม่ยื่นต่อ ถ้าไม่ได้คงต้องไปดูที่อื่น แต่ที่นี่ก็ใกล้ญาติด้วยเลยอยากได้ที่นี่ที่สุดครับ:</p>
                    <p>อจผญ: จบนี่จะทำอะไร</p>
                    <p className='text-right ml-16'>มีแพลนจะเรียนต่อโทที่ต่างประเทศ เป็นสายบริหารธุรกิจ แล้วก็มาเปิดธุรกิจส่วนตัว:</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>อาจารย์ผญอึ้งแบบค้างไปเลย อาจารย์ผชเลยแนะนำว่าเรียนวิศวะเข้าใจการทำงานก่อนแล้วก็ต่อบริหารก็โอเค</p>
                    <p>อจผช: มีอะไรจะถามมั้ย</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>เลยถามเรื่องทุนไปว่ามีอะไรบ้าง แล้วก็ถามเรื่องชมรมยิงปืนไปเพราะแอบสนใจ</p>
                    <p>อจผช:นอกจากเขียนโปรแกรมมีเล่นกีฬาหรืออะไรมั้ย</p>
                    <p className='text-right ml-16'>กำลังฝึกเล่นไวโอลินกับกีตาร์ครับ:</p>
                    <p>อจผช: ที่นี่มีชมรมดนตรีแล้วก็ข้างล่างมีกลองอยู่นะ</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>แล้วก็จบการสัมภาษณ์ด้วยการที่บอกกับอาจารย์ว่า &quot;ขอความกรุณาด้วยนะครับอาจารย์&quot;</p>
                    <p>อจผช:เลือกไม่ยากหรอก แต่คุณจะเอาที่นี่จริงหรือเปล่า ถ้าคุณไม่เอาก็เสียดายคนที่ผมตัดไป</p>
                    <p className='italic text-gray-700 text-lg text-center my-3'>เราเลยยิ้มให้อาจารย์แล้วก็ขอบคุณก่อนออกมา</p>
                </div>
                <p className='text-lg'>คืออาจารย์ก็คงกลัวแหละว่าถ้าติดแล้วจะไปเอาที่อื่น พอออกมาเพิ่งรู้ว่าคุยไปนานมาก จนเพื่อนที่สัมภาษณ์อีกห้องเข้าไปสัมภาษณ์ทีหลังแล้วออกมาก่อน แต่เราไม่ได้ดูเวลาเลยว่าสัมภาษณ์ไปนานแค่ไหน รู้สึกว่าแปปเดียวเอง ตกใจมาก โดยรวมรู้สึกว่าโอเคมาก คุยสนุกคุยไปเรื่อย จบการรีวิวสัมภาษณ์ วิศวะคอม มหิดลครับ</p>
                <p className='text-lg'>11/11/67: ผ่านสัมภาษณ์แล้วครับ</p>
                <div>
                    <Image src="https://i.ibb.co/Np5G4TV/Screenshot-2567-11-11-at-17-21-21.png" width={2000} height={2000} alt="Screenshot-2567-11-11-at-17-21-21" />
                    <p className='text-center text-gray-600 text-sm'>ขอแปะรูป</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

