import React from 'react';
import styles from './task-06.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';
import { TaskTag } from '../../common/task-tag/task-tag';

export interface Task06Props {
    className?: string;
}

export const Task06: React.FC<Task06Props> = (className) => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>06</b> / 10
            </div>
            <div className={styles.title}>Create Class</div>
            <ol start={0} className={styles.desc}>
                <li>
                    {' '}
                    <b>Classes</b> let you apply a set of styles to one or more
                    elements. Let's change the background color by creating a
                    class.
                </li>
                <li>
                    {' '}
                    <TaskSymbol name="edit" />
                    Edit <TaskSymbol name="component" />
                    <b>Lesson06</b> and select <br></br>
                    <TaskTag type="tree">div.playground.bgColor</TaskTag> on the{' '}
                    <br />
                    <b>Elements Panel.</b>
                </li>
                <li>
                    {' '}
                    To apply new style, open the <br />
                    <TaskSymbol name="styles" />
                    <b>Styles Panel</b> and click <TaskSymbol name="add" />
                    <b>Add Class</b>.{' '}
                </li>
                <li>
                    {' '}
                    Click{' '}
                    <span style={{ fontSize: '13px', color: '#0000EE' }}>
                        + Create Class
                    </span>
                    . Name it and choose the <b>lesson-06.module.scss</b> style
                    file to style this component.
                </li>
                <li>
                    {' '}
                    Scroll to <b>Backgrounds</b> and set the background to{' '}
                    <b>$charcoal-black</b>.{' '}
                </li>
            </ol>
        </div>
    );
};
