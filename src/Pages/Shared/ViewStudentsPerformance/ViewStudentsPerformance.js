import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { IndividualPerformance } from '../../../SchoolRedux/PrincipalSlice';
import ViewSecondTerm from './VewSecondTerm';
import ViewFirstTerm from './ViewFirstTerm';
import ViewThirdTerm from './ViewThirdTerm';

const ViewStudentsPerformance = () => {
    const {id} = useParams();
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(IndividualPerformance(id))
    },[id, dispatch])

    const performance = useSelector((state) => state.principalStore.performances);
    const first = performance?.find(result => result.term === 'First-Term');
    const second= performance?.find(result => result.term === 'Second-Term');
    const third = performance?.find(result => result.term === 'Third-Term');



  return (
        <>
            {
              first?.term === 'First-Term' && <ViewFirstTerm result={first}/>
            }
             {
              second?.term === 'Second-Term' && <ViewSecondTerm result={second}/>
            }
            {
              third?.term === 'Third-Term' && <ViewThirdTerm result={third}/>
            }
        </>
  )
}

export default ViewStudentsPerformance
