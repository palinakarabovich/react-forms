import React from "react";
import styles from './AddOns.module.css'
import { dataAddons } from "../../assets/data";
import ButtonsGroup from "../ButtonsGroup/ButtonsGroup";
import { addOnsValue } from "../../types/types";
import { useAppDispatch } from "../../hooks/useDispatch";
import { resetAddons, saveAddons } from "../../redux/slices/formSlice";
import { stepForward } from "../../redux/slices/stepsSlice";
import { useAppSelector } from "../../hooks/useSelector";
import { calculateYearlyPrice } from "../../utils/calculateYearlyPrice";


const AddOns: React.FC = () => {

  const [selectedAddons, setSelectedAddons] = React.useState<Array<addOnsValue>>([]);
  const dispatch = useAppDispatch();
  const { yearly } = useAppSelector((store) => store.form.plan);
  const { addOns } = useAppSelector((store) => store.form)

  React.useEffect(() => {
    if (addOns.length !== 0) {
      if(yearly){
        const savedAddons = addOns.map((a) => {
          const price = a.price / 12;
          return {...a, price}
        })
        console.log(savedAddons)
        setSelectedAddons(savedAddons);
      } else {
        setSelectedAddons(addOns)
      }
      }
  
  }, [])

  const handleAddonSelection = (index: number) => {
    const currentAddon = dataAddons[index];
    if (checkAddonIsSelected(currentAddon)) {
      const filtretedAddOns = selectedAddons.filter((a) => a.name !== currentAddon.name);
      setSelectedAddons(filtretedAddOns)
    } else {
      setSelectedAddons([...selectedAddons, currentAddon])
    }
  };

  const submitAddons = () => {
    dispatch(resetAddons());
    if (selectedAddons.length !== 0) {
      dispatch(saveAddons(selectedAddons));
    }
    dispatch(stepForward())
  }

  const checkAddonIsSelected = (addon: addOnsValue) => {
    return selectedAddons.some((a) => a.name === addon.name)
  }

  return (
    <section className={styles.addons}>
      <ul className={styles.list}>
        {
          dataAddons.map((d, index) => (
            <li
              className={styles.container}
              onClick={() => handleAddonSelection(index)}
              key={d.name}
            >
              <div className={styles.group}>
                <input
                  type="checkbox"
                  className={styles.input}
                  id={d.name}
                  checked={checkAddonIsSelected(d)}
                  onChange={() => handleAddonSelection(index)}
                />
                <div className={styles.checkbox} />
              </div>
              <div className={styles.info}>
                <p className={styles.option}>{d.name}</p>
                <p className={styles.caption}>{d.caption}</p>
              </div>
              <p className={styles.price}>+${yearly ? calculateYearlyPrice(d.price) : d.price}/{yearly ? 'year' : 'mo'}</p>
            </li>
          ))
        }
      </ul>
      <ButtonsGroup
        handleForwardClick={submitAddons}
      />
    </section>
  )
}

export default AddOns;