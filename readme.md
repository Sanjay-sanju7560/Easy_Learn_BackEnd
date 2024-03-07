      {/* <div width="60%" style={{ backgroundColor: '#f2f2f2', height: '430px',width:'500px', margin: '230px', marginTop: '30px', borderRadius: '10px' }}>
        <p style={{ margin: '20px', fontWeight: 'bold', fontSize: '18px' }} className='ms-5 '><br />Learn at the comfort of your own home</p>
        <Form action="POST" className='w-100' >

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicTitle"> Course Name  <br />
            <Form.Controltype="text" placeholder="Course Name " 
               onChange={e=>setCourseData({...courseData,title:e.target.value})} value={courseData.title}
               style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicCategory"> category  <br />
            <Form.Control  type="text" placeholder="category"
             onChange={e=>setCourseData({...courseData,category:e.target.value})} value={courseData.category}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicDetails"> Details  <br />
            <Form.Control  type="text" placeholder="About the course "
             onChange={e=>setCourseData({...courseData,details:e.target.value})} value={courseData.details}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>
          
          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLength"> Length of the Video  <br />
            <Form.Control type="text" placeholder="Length in Minutes"
             onChange={e=>setCourseData({...courseData,len:e.target.value})} value={courseData.len}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLink"> Link  <br />
            <Form.Control  type="text" placeholder="Youtube Link for Video"
             onChange={e=>setCourseData({...courseData,link:e.target.value})} value={courseData.link}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          <Form.Group id="forInpCol" className="mb-3" controlId="formBasicLink"> Add An Image For Video template  <br />
            <Form.Control  type="file" placeholder="Youtube Link for Video"
            onChange={e=>setCourseData({...courseData,courseTemp:e.target.files[0]})}
            style={{ margin:'2x',width:'80%' }}/>
          </Form.Group>

          
          <Button className='btn btn-dark mb-2' style={{ border: '3px', background: '#80d4ff', margin: '20px', marginLeft: '35px', padding: '5px', fontSize: '15px', borderRadius: '15px' }} 
            onClick={handleUpdateCourse}  >Add Course</Button>
           
        </Form>
        <ToastContainer autoClose={2000} theme="colored" position="top-center"/>

      </div> */}